const graphql = require("graphql");
const { DreamType, DeleteDreamType, DreamImageInputType } = require("./types");
const mongoose = require("mongoose");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
} = graphql;
require("../models");

const DreamInstance = mongoose.model("dream");

const mutations = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    createDream: {
      type: DreamType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        time: { type: GraphQLString, nullable: true },
        rating: { type: GraphQLInt, nullable: true },
        image: { type: DreamImageInputType, nullable: true },
      },
      resolve(parent, args) {
        console.log(args, "telicinda_log");
        return new DreamInstance(args).save();
      },
    },
    updateDream: {
      type: DreamType,
      args: {
        _id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        time: { type: GraphQLString, nullable: true },
        rating: { type: GraphQLInt, nullable: true },
        image: { type: DreamImageInputType, nullable: true },
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
