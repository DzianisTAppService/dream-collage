const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DreamSchema = new Schema(
  {
    name: { type: String, required: true },
    time: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

mongoose.model('dream', DreamSchema);
