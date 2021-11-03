const graphql = require("graphql");
const { DreamType, DeleteDreamType } = require("./types");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
require("../models");

const DreamInstance = mongoose.model("dream");

const mutations = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    createDream: {
      type: DreamType,
      args: {
        name: { type: GraphQLString },
        time: { type: GraphQLString },
        rating: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return new DreamInstance(args).save();
      },
    },
    updateDream: {
      type: DreamType,
      args: {
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        time: { type: GraphQLString },
        rating: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return DreamInstance.findByIdAndUpdate(args._id, args);
      },
    },
    deleteDream: {
      type: DeleteDreamType,
      args: {
        _id: { type: GraphQLID },
      },
      async resolve(parent, args) {
        return DreamInstance.deleteOne(args);
      },
    },
  },
});

module.exports = mutations;
