const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Contas = new Schema({
    nome: String,
    contas: Number
})

module.exports = mongoose.model('Contas', Contas)