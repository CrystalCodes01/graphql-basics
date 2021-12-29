import { GraphQLServer } from 'graphql-yoga';

// Scalar types

const server = new GraphQLServer({
    typeDefs:`
        type Query {
            agent: User!
            agents: [User]
        }

        type User {
          id: ID
          name: String
          age: Int
          married: Boolean
          average: Float
        }
    `,
    resolvers:{
        Query:{
          agent(){
            return {
              id: 1,
              name: 'Crystal',
              age: 36,
              married: true,
              average: 3.5
            }
          },
          agents() {
            return [
              {
                id: 1,
                name: 'Crystal',
                age: 36,
                married: true,
                average: 3.5
              },
              {
                id: 2,
                name: 'Bryan',
                age: 36,
                married: true,
                average: 3.5
              }
            ]
          }
        }
    }
});

server.start(()=>{
    console.log('And running running');
})
