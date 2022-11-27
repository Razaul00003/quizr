const { model, Schema } = require("mongoose");

const quizSchema = new Schema(
  {
    userName: { type: String, required: true },
    category: { type: String, required: true },
    result: { type: Number, requred: true },
  },
  { timestamps: true }
);
module.exports = model("quiz", quizSchema);
