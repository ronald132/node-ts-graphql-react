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

### Querying and Mutating listing data

npm i -D @graphql-tools/utils

### Using GraphQL Schema Language

npm i -D @graphql-tools/utils

### Storing Data in MongoDB

#### Dockerize

docker run -itd -e MONGO_INITDB_ROOT_USERNAME=<username> -e MONGO_INITDB_ROOT_PASSWORD=<password> -p 27017:27017 -v mongo-vol:/data/db --name mongo-db mongo

#### connection string

mongodb+srv://<username>:<password>@localhost

### Connect to MongoDB

npm i mongodb
npm i -D @types/mongodb

### Typescript Generics and adding types to our Collections

### Setting up Environment Variable using dotenv

npm i -D dotenv @types/dotenv
