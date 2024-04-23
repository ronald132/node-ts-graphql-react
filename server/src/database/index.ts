import { MongoClient } from 'mongodb'
import { Database } from '../lib/types'

const url = `mongodb://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}:${process.env.DB_PORT}`

export const connectDatabase = async (): Promise<Database> => {
  console.log(`connected to database: ${url}`)
  const client = await MongoClient.connect(url)

  const db = client.db(process.env.DB_NAME)

  return {
    listings: db.collection('test_listings'),
  }
}
