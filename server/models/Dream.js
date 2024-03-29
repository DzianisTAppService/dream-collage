const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DreamSchema = new Schema(
  {
    name: { type: String, required: true },
    time: { type: String },
    rating: { type: Number },
    image: {
      dataURL: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

mongoose.model("dream", DreamSchema);
