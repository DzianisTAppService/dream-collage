const graphql = require("graphql");
const { GraphQLInputObjectType } = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;

const DreamImageType = new GraphQLObjectType({
  name: "DreamImageType",
  fields: () => ({
    dataURL: { type: GraphQLString },
    contentType: { type: GraphQLString },
  }),
});

const DreamType = new GraphQLObjectType({
  name: "Dream",
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    time: { type: GraphQLString },
    rating: { type: GraphQLInt },
    image: { type: DreamImageType },
  }),
});

const DeleteDreamType = new GraphQLObjectType({
  name: "DeleteDream",
  fields: () => ({ deletedCount: { type: GraphQLInt } }),
});

//INPUT TYPES

const DreamImageInputType = new GraphQLInputObjectType({
  name: "DreamImageInputType",
  fields: () => ({
    dataURL: { type: GraphQLString },
    contentType: { type: GraphQLString },
  }),
});

module.exports = {
  DreamType,
  DeleteDreamType,
  DreamImageType,
  DreamImageInputType,
};
