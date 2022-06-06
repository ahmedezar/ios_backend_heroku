const mongoose = require("mongoose")

const PanierSchema = new mongoose.Schema(
  {
    formations : [{ type : mongoose.Schema.Types.ObjectId, ref: "Formation" }],
  },
  {
    timestamps: { currentTime: () => Date.now() },
  }
)
module.exports = mongoose.model("Panier", PanierSchema)
