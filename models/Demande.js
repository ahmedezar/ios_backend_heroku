const mongoose = require("mongoose")

const DemandeSchema = new mongoose.Schema(
  {
    nom: { type: String },
    cv: { type: String },
    etat: { type: Number },
    user: { type : mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
)
module.exports = mongoose.model("Demande", DemandeSchema)
