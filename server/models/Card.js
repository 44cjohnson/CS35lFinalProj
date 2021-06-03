const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating a schema
const CardSchema = new Schema({
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
  },
  descript: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = Card = mongoose.model("card", CardSchema);
