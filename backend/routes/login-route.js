const express = require(`express`)
const app = express()

app.use(express.json())
const loginController = require(`../controllers/login`)

app.post(`/login`, loginController.login)

module.exports = app
