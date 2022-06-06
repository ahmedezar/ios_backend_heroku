const mongoose = require("mongoose")

const CourSchema = new mongoose.Schema(
  {
    nom: { type: String },
    categorie : { type : mongoose.Schema.Types.ObjectId, ref: "Categorie" },
    pdf: { type: String },
    description: { type: String }
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
)
module.exports = mongoose.model("Cour", CourSchema)