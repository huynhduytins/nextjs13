"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags (params: GetTopInteractedTagsParams) {
    try {
        connectToDatabase();

        const { userId } = params

        const user = await User.findById(userId)

        if(!user) throw new Error("User not found")

        return ['tag1', 'tag2', 'tag3']
    } catch (error) {
        console.log(error)
        throw error
    }
}