import { MongoClient } from 'mongodb'

const user = 'admin'
const password = 'admin'
const clusterUrl = 'localhost'
const port = 27017
const dbName = 'tinyhouse'

const url = `mongodb://${user}:${password}@${clusterUrl}:${port}`

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url)

  const db = client.db(dbName)

  return {
    listings: db.collection('test_listings'),
  }
}
