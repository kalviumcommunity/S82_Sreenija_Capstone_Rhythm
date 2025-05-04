const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  title: String,
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  price: Number,
  videoUrl: String,
});

module.exports = mongoose.model("Class", classSchema);
