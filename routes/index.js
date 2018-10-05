var express = require('express');
var router = express.Router();
var Conta = require('../models/contas')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

});
router.post('/', async (req, res, next) => {
  try {
    await Conta.create(req.body)
    res.redirect('/')

  } catch (err) {
    next(err)
  }

});



module.exports = router;
