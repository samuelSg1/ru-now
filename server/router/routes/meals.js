const express = require('express');
const router = express.Router();
const request = require('request');
const cheerio = require('cheerio');
const url = 'http://www.cardapioru.com.br';

router.get('/', (req, res) => {
  request(url, (error, response, html) => {
    if(!error){
      const $ = cheerio.load(html);
      const daysToFetch = $('#refeicoesRU').attr('quantidademax');
      const data = [];
      for (var i = 1; i <= daysToFetch; i++) {
        var day = '#RUdia'+i;
        var date = $(day).attr('name');
        var meal = $(day+' .cafeDaManha .descricaoRefeicao').text();
        data.push({
          data: date,
          breakfast: meal
        })
      }
      res.send(data)
    }
  })
})

module.exports = router;
