const mongoose = require("mongoose")

const FormationSchema = new mongoose.Schema(
  {
    nomFormateur: { type: String },
    nomFormation: { type: String },
    prix: { type: Number },
    description: { type: String }
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
)
module.exports = mongoose.model("Formation", FormationSchema)