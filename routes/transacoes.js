var express = require('express');
var router = express.Router();
var Conta = require('../models/contas')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('transacoes');
});

router.post('/', async (req, res, next) => {
    let cont1 = req.body.conta1
    let cont2 = req.body.conta2
    let valorTransferencia = req.body.contaValor
    let conta1 = await Conta.findById({ _id: cont1 })
    let conta2 = await Conta.findById({ _id: cont2 })
    console.log(conta1);
  try {
    conta1.contas = conta1.contas - Number(valorTransferencia)
    conta2.contas = conta2.contas + Number(valorTransferencia)

    
    await conta1.save()
    await conta2.save()
    console.log('dsfsdfsd');
    
    res.redirect('/transacoes');

  } catch (err) {
    next(err)
  }
});

module.exports = router;
