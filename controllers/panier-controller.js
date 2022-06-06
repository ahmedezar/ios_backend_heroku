const Cour = require("../models/Cour")

exports.getAll = async (req, res) => {
    res.send({ paniers: await Cour.find() })
}

exports.add = async (req, res) => {
    const { formations } = req.body;

    const nouveauCour = new Cour()

    nouveauCour.formations = formations;

    nouveauCour.save();

    res.status(201).send({ message: "success", panier: nouveauCour })
}

exports.edit = async (req, res) => {
    const { _id, formations } = req.body

    let panier = await Cour.findOneAndUpdate(
        { _id: _id },
        {
            $set: {
                formations: formations
            }
        }
    )
    res.status(201).send({ message: "success", panier: panier })
}

exports.delete = async (req, res) => {
    const panier = await Cour.findById(req.body._id).remove()
    res.status(201).send({ message: "success", panier: panier })
}

exports.deleteAll = async (req, res) => {
    Cour.remove({}, function (err, panier) {
        if (err) { return handleError(res, err) }
        return res.status(204).send({ message: "Aucun element" })
    })
}
