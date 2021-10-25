const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

const DreamType = new GraphQLObjectType({
  name: "Dream",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    time: { type: GraphQLString },
    rating: { type: GraphQLInt },
    image: { type: GraphQLString },
  }),
});

module.exports = DreamType;
