const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const RegSchema = new Schema(
    {
        addr: String,
        city: String,
        firstname: String,
        lastname: String,
        middlename: String,
        pin: Number,
        state: String,
    }
  );

  const RegModel = mongoose.model(
    "Reg_login",
    RegSchema,
    "Reg_login"
  );

  module.exports = {
    RegModel
  }
