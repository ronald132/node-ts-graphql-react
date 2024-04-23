require('dotenv').config()

import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql'
import { connectDatabase } from './database'

const mount = async (app: any) => {
  const db = await connectDatabase()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  })
  await server.start()
  server.applyMiddleware({ app, path: '/api' })

  app.listen(process.env.PORT)
  console.log(`[app]: http://localhost:${process.env.PORT}`)
}

const app = express() as any
mount(app)
