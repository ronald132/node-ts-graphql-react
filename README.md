### Enable express

npm i express

### Automatic reloading with Nodemon

npm i -D nodemon

### Build

npm run build

### Run

node build/index.js

### Linting with ESLint

npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

### Enable body parser

npm i -D @types/body-parser

### Testing with curl

curl -X POST http://localhost:9000/delete-listing -H 'Content-Type: application/json' -d '{"id": "001"}'

-X : specify which HTTP method to use
-H : header

### Instaling Apollo Server and GraphQL

npm i apollo-server-express
npm i graphql
npm i -D @types/graphql
