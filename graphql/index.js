const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    input AssociateInput {
      name: String!
      schedule: [ScheduleInput]!
    }
   
    input ScheduleInput {
      date: String!
      entry: String!
      exit: String!
    }

    type Associate {
      id: ID
      name: String!
      schedule: [Schedule]!
      scheduleHistory: [Schedule]
    }

    type Schedule {
        date: String!
        entry: String!
        exit: String!
    }

    type Mutation {
        createAssociate(associate: AssociateInput!): Associate!
        setNewSchedule(associateName: String!, schedule: ScheduleInput!): String!
    }

    type Query {
        getAssociateData(associateName: String!): Associate!
        getAssociatesList: [Associate!]!
    }
`;

module.exports = makeExecutableSchema({ typeDefs, resolvers });