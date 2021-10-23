const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

const DreamType = new GraphQLObjectType({
  name: 'Dream',
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    time: { type: GraphQLString },
    rating: { type: GraphQLInt },
  }),
});

module.exports = DreamType;
