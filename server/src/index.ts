import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'

const mount = async (app: any, schema: any) => {
  const port: number = 9000

  const server = new ApolloServer({ schema })
  await server.start()
  server.applyMiddleware({ app, path: '/api' })

  app.listen(port)
  console.log(`[app]: http://localhost:${port}`)
}

const app = express() as any
mount(app, schema)
