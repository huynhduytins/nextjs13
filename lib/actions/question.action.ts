'use server'

import Question from '@/database/question.model'
import { connectToDatabase } from '../mongoose'
import Tag from '@/database/tag.model'

export async function createQuestion(params: any) {
  try {
    await connectToDatabase()
    // eslint-disable-next-line no-unused-vars
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
            $regex: new RegExp(`^${tag}$`, 'i'),
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
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
  }
}
