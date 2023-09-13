const { json } = require('express');
var express = require('express');
const { request } = require('http');
var router = express.Router();
const sql = require("../dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

router.get("/test", async function (req, res, next) {
  try {
    const data = await sql.UserTable();
    res.json(data); // Send the JSON response with the data
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

router.get("/all", async function (req, res, next) {
  try {
    const data = await sql.AllData();
    res.json(data); // Send the JSON response with the data
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});
module.exports = router;
