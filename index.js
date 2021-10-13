require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schemas');
const resolvers = require('./src/resolvers');
const { connectToDatabase } = require('./src/config/db');


main = async () => {
  try {
    await connectToDatabase();
    const server = new ApolloServer({
      typeDefs,
      resolvers
    });
    
    server.listen()
      .then(({ url }) => {
        console.log(`Server listening at ${url}`)
      });
  } catch(err) {
    console.log(err.message)
  }
}

main();