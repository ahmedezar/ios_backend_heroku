const User = require("../models/User")
const jwt = require("jsonwebtoken")
const config = require("../config.json")
const bcypt = require("bcrypt")

exports.getAll = async (req, res) => {
  res.status(200).send({ users: await User.find(), message: "success" })
}

exports.register = async (req, res) => {
  const { nom, username, email, password, role } = req.body

  if (await User.findOne({ email })) {
    res.status(403).send({ message: "User already exists" })
  } else {
    const nouveauUser = new User()

    nouveauUser.nom = nom
    nouveauUser.username = username
    nouveauUser.email = email
    nouveauUser.role = role
    nouveauUser.password = await bcypt.hash(password, 10)

    nouveauUser.save()

    // token creation
    const token = jwt.sign({ _id: nouveauUser._id }, config.token_secret, {
      expiresIn: "600000", // in Milliseconds (3600000 = 1 hour)
    })

    res.status(201).send({ message: "success", user: nouveauUser, "token": jwt.verify(token, config.token_secret) })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcypt.compare(password, user.password))) {

    const token = jwt.sign({ email: email }, config.token_secret, {
      expiresIn: "36000000",
    })

    res.status(200).send({ token, user, message: "Success" })

  } else {
    res.status(403).send({ message: "Invadlid credentials" })
  }
}

exports.updateProfil = async (req, res) => {
  console.log(req.body)

  const { _id, nom, username, email, password } = req.body


  let hashedPassword = await bcypt.hash(password, 10)

  let user = await User.findOneAndUpdate(
    { _id: _id },
    {
      $set: {
        nom: nom,
        username: username,
        email: email,
        password: hashedPassword
      }
    }
  )

  res.send({ user })
}

exports.delete = async (req, res) => {
  console.log(req.body)

  const user = await User.findById(req.body._id).remove()

  res.send({ user })
}

exports.deleteAll = async (req, res) => {
  User.remove({}, function (err, user) {
    if (err) {
      return handleError(res, err)
    }
    return res.status(204).send({ message: "Aucun element" })
  })
}