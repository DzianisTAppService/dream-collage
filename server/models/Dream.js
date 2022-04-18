const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DreamSchema = new Schema(
  {
    name: { type: String, required: true },
    time: { type: String },
    rating: { type: Number },
  },
  { timestamps: true }
);

mongoose.model("dream", DreamSchema);
