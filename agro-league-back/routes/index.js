require('dotenv').config();
var express = require('express');
var router = express.Router();
const axios = require("axios");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello");
});

router.get('/search', function(req, res, next) {
  console.log(req.query);

  let baseUrl = `http://www.omdbapi.com?t=${req.query.title}`;
  if (req.query.year) baseUrl = `${baseUrl}&y=${req.query.year}`;
  let url = `${baseUrl}&plot=full&apikey=${process.env.apikey}`;
  console.log(url);

  axios.get(`${url}`)
  .then(response => {
    console.log(response);
    res.send(response.data)
  })
  .catch(err => {
    console.log("error", err);
    res.send(err);
  });
});

module.exports = router;
