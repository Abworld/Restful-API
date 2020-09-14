const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestsubSchema = new Schema(
  {
    group_name: {
      type: String,
      required: true,
    },
    candidate_name: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Restsub = mongoose.model("restSub", RestsubSchema);
module.exports = Restsub;
