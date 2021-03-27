var express = require('express');
var router = express.Router();
const user_input=require('../model/user_input')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session)
  console.log(req.sessionID)
  
  res.render('index', { title: 'Login'});

});

router.get('/home', function(req,res){
  user_id = req.body.user_id
  res.render('home', {title:"Homepage", user_id: req.session.user_id})
})

router.post('/home', function(req,res){
  req.session.user_id = req.body.user_id
  console.log(req.body.user_id)
  res.render('home', {title:"Homepage", user_id: req.session.user_id})
})

router.get('/backlog', function(req,res){
  console.log(req.session.user_id)
  user_input.find({user_id:req.session.user_id}).then((output)=>{
    console.log(output)
    res.render('backlog', {title:"Backlog", user_id: req.session.user_id, data: output})
  }).catch((err) =>{
    console.error(err)
    res.send("Error")
  })
})

router.post('/create',function(req,res){
  var new_user_input = new user_input()
  new_user_input.title = req.body.title
  new_user_input.media = req.body.media
  new_user_input.genre = req.body.genre
  new_user_input.description = req.body.description
  new_user_input.bstatus = req.body.bstatus
  new_user_input.user_id= req.session.user_id
  new_user_input.save(function(err){
    if(err){
      console.error(err)
      res.json({result:0})
    }
    res.json({result:1})
  })
})

router.post('/read',(req,res)=>{
  //title:req.body.title
  user_input.find({}).then((output)=>{
    res.json(output)
  }).catch((err) => {
    console.error(err)
    res.send("Error")
  })
})


router.post('/update',function(req,res){
  user_input.updateOne({title:req.body.title},{
    title:req.body.title,
    media:req.body.media,
    description:req.body.description,
    genre:req.body.genre,
    status:req.body.status,
    published_date:Date.now()
  }).then(function(output){
    res.json(output)
  }).catch((err) =>{
    console.error(err);
    res.send("Error")
  })
})

router.post('/delete',function(req,res){
  user_input.remove({title:req.body.title})
  .then(
    function(output){
      res.json(output)
    }).catch((err) => {
      console.error(err)
      res.send("Error")
    })
})

router.post('/search',(req,res)=>{
  user_input.find({title:req.body.title})
  .then(
    (output) => {
      if(output === undefined || output.length == 0){
        res.send("No Entry Found")
      }else{
        res.json(output)
      }
    })
})

module.exports = router;