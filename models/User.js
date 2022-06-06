const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    nom: { type: String },
    username: { type: String },
    email: { type: String },
    password: { type: String },
    role:  { type: String }
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
)
module.exports = mongoose.model("User", UserSchema)
