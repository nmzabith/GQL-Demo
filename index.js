const {ApolloServer, gql} = require("apollo-server");

const typeDefs = gql`
    type SkiDay {
        id: ID!
        date: String!
        mountain: String!
        condition: Conditions!
    }

    enum Conditions {
        POWDER
        HEAVY
        ICE
        THICK
    }
    type Query {
        totalDays: Int!
        allDays: [SkiDay!]!
    }

    input addDayInput {
        date: String
        mountain: String
        conditions: Conditions
    }

    type Mutation {
        addDay(input: addDayInput!): SkiDay!
        removeDay(id: ID!) : SkiDay!
    }
`;

const server = new ApolloServer({
    typeDefs,
    mocks: true
});

server.listen().then(url => console.log(`Server Running on ${url.url}`));