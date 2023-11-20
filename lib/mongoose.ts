import mongoose from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase = async (): Promise<void> => {
  mongoose.set('strictQuery', true)

  if (!process.env.MONGODB_URL) {
    return console.error('Missing MONGODB_URL')
  }

  if (isConnected) {
    return console.log('Mongoose is already connected')
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: process.env.MONGODB_DBNAME,
    })
    isConnected = true
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
  }
}
