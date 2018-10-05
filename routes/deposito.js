var express = require('express');
var router = express.Router();
var Conta = require('../models/contas')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('deposito');
});

router.post('/', async (req, res, next) => {
    let cont1 = req.body.conta1
    let valorTransferencia = req.body.contaValor
    let conta1 = await Conta.findById({ _id: cont1 })
    console.log(conta1);
  try {
    conta1.contas = conta1.contas + Number(valorTransferencia)
    await conta1.save()
    res.redirect('/deposito');
  } catch (err) {
    next(err)
  }
});

module.exports = router;
