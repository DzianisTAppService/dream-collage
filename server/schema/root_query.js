const graphql = require("graphql");
const { DreamType } = require("./types");
const mongoose = require("mongoose");
const { GraphQLObjectType, GraphQLList, GraphQLID } = graphql;
require("../models");

const DreamInstance = mongoose.model("dream");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    dream: {
      type: DreamType,
      args: {
        _id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return DreamInstance.findById(args._id);
      },
    },
    dreams: {
      type: new GraphQLList(DreamType),
      resolve(parent, args) {
        return DreamInstance.find();
      },
    },
  },
});

module.exports = RootQuery;
