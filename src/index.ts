import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './types';
import resolvers from './resolvers';


const server = new ApolloServer({
  typeDefs,
  resolvers,
});



startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => (
    console.log(`🚀 Server listening at: ${url}`)
));