## Server

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

### Interact graphql with mongodb

### Modularizing Resolvers

npm i lodash.merge
mpm i -D @types/lodash.merge

## Client

### Use React

1. React is reusable component
2. React is data driven application, we change data in state so the UI will update
3. Props is used to passed data from one component to another, one direction from parent to children

### Webpack is javascript bundler

### Create react app

npx create-react-app client --template typescript
cd client
npm start

### Create Listing Components

### Props & TypeScript

### Querying Listing using GraphQL

### Webpack help to proxy to handle CORS issue

- remember to clear cache by deleting package-lock.json and node_modules
- run npm install again

### Use React Hooks
