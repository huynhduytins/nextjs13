"use server"

import { revalidatePath } from "next/cache"

import Question from "@/database/question.model"
import Tag from "@/database/tag.model"
import User from "@/database/user.model"

import { connectToDatabase } from "../mongoose"
import { CreateQuestionParams, GetQuestionsParams } from "./shared.types"

export async function getQuestions(params: GetQuestionsParams) {
  try {
    await connectToDatabase()

    // const { filter, page, pageSize, searchQuery } = params

    const questions = await Question.find({})
      .populate({
        path: "tags",
        model: Tag,
      })
      .populate({
        path: "author",
        model: User,
      })
      .sort({ createdAt: -1 })

    return questions
  } catch (error) {
    console.log("Error connecting to MongoDB", error)
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    await connectToDatabase()
    const { title, content, tags, path, author } = params
    const question = new Question({
      title,
      content,
      author,
    })

    question.save()

    const questionTags = []

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        {
          name: {
            $regex: new RegExp(`^${tag}$`, "i"),
          },
        },
        {
          $setOnInsert: {
            name: tag,
          },
          $push: {
            questions: question._id,
          },
        },
        {
          upsert: true,
          new: true,
        }
      )

      questionTags.push(existingTag._id)
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: {
        tags: {
          $each: questionTags,
        },
      },
    })

    revalidatePath(path)
  } catch (error) {
    console.error("Error connecting to MongoDB", error)
  }
}
