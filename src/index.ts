import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './types';
import resolvers from './resolvers';

const PORT = 5553;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});



startStandaloneServer(server, { listen: { port: 5555 } }).then(() => (
    console.log(`🚀 Server listening at: http://localhost:${PORT}/`)
));