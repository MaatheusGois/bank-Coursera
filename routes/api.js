var express = require('express');
var router = express.Router();
var Conta = require('../models/contas')

/* GET home page. */
router.get('/', async (req, res, next) => {
    let palestra = await Conta.find({})
    try{
    res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(palestra);
    } catch(err){
        next(err)
    }
});



module.exports = router;
