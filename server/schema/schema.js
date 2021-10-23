// https://medium.com/devnetwork/super-simple-graphql-with-node-part-2-cc43c06ecb8
const graphql = require('graphql');
const RootQuery = require('./root_query');
const mutations = require('./mutations');
const { GraphQLSchema } = graphql;

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations,
});
