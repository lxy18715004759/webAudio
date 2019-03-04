var express = require('express');
var router = express.Router();

var fs = require("fs");
var path = require("path");
var media = path.join(__dirname,"../public/media");

/* GET home page. */
router.get('/', function(req, res, next) {


  fs.readdir(media,(err,names)=>{

    if(!err){
      console.log(err);
    }else{

      console.log("names",names);
    }
  })

  res.render('index', { title: 'music' });

});

module.exports = router;
