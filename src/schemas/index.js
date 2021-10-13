const { gql } = require('apollo-server');

const typeDefs = gql`
  type Field {
    name: String!
    label: String
    type: String!
    required: Boolean
  }
  type Form {
    title: String!
    path: String!
    fields: [Field]!
  }
  type Query {
    getForm(path: String!): Form
    getForms: [Form]
  }
`

module.exports = typeDefs;