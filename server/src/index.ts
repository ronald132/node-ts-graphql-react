import express from 'express'
import { listings } from './listings'
import bodyParser from 'body-parser'
const app = express()

const port: number = 9000

const one: number = 1
const two: number = 2

// parsing incoming json request
app.use(bodyParser.json())

app.get('/', (_req, res) => res.send(`Hello world ${one + two}`))

app.get('/listings', (_req, res) => {
  return res.send(listings)
})

app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1))
    }
  }

  return res.send('failed to delete listing')
})

app.listen(port)

console.log(`[app]: http://localhost:${port}`)
