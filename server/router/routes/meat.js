const express =  require('express');
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const moment = require('moment');

const MeatVote = mongoose.model('MeatVote', {
  vote: Boolean,
  userId: String,
  date: Date
})



router.post('/vote', (req, res) => {
  // receber parametros: vote, userId, date
  // salvar num modelo de Line
  const q = req.body

  var today = moment().startOf('day')
  var tomorrow = moment(today).add(1, 'days')

  const query = MeatVote.find()

  MeatVote.findOne({
    userId : q.userId,
    date : {
      $gte: today.toDate(),
      $lt: tomorrow.toDate()
    }
  }, (err, meatVote) => {
    if( err )
    {
      res.status(200).json({error: true, msg: err })
    }
    console.log(meatVote);
      if( !meatVote )
      {
        const vote = new MeatVote({
          vote: q.vote,
          userId: q.userId,
          date: Date.now(),
        }).save((err) => {
          if( err )
            res.status(200).json({error: true, msg: err })
          else
            res.status(200).json({error: false, msg: 'Obrigado pela colaboração! ;D'})
        })
      }
      else
        res.status(200).json({error: false, msg: 'Você já disse que ' + ((meatVote.vote) ? 'tem' : 'não tem') + ' carne hoje!'})
  })
})

router.get('/', (req, res) => {

  const query = MeatVote.find({})
  var myData = [];
  console.log(moment().startOf('day'));
  query.exec((err, data) => {
    if(err) {
      console.log("ERROR ON LINES GET", err);
    }
    data.map((item, key) => {
      myData.push({ userId: item.userId, vote: item.vote, date: item.date })
    });
    res.status(200).json(myData)
    console.log(myData);
  })

  //res.status(200).send("Oi"+myData)
})

module.exports = router;
