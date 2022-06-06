const mongoose = require("mongoose")

const CategorieSchema = new mongoose.Schema(
  {
    nom: { type: String },
    image: { type: String }
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
)

module.exports = mongoose.model("Categorie", CategorieSchema)