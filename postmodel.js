const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostsubSchema = new Schema(
  {
    // _id: {
    //   type: String,
    // },
    location: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
    // attachement: {
    //   type: File,
    //   required: true,
    // },
  },
  { timestamps: true }
);
const Posting = mongoose.model("postmodel", PostsubSchema);
module.exports = Posting;
