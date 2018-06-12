var express = require('express');
var router = express.Router();

const User=require('../models/user');
const mongoose=require('mongoose');

router.post('/', function(req, res, next) {
  const user= new User({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name
  });

    user.save().then(result =>{
      console.log(result)
    })
    .catch(err => console.log(err));
    res.status(201).json({
      message:"handling post request to /users",
      createdProdcut:user
    })
});

// check the license
router.get("/:SN",(req,res,next)=> {
   const sn =req.params.SN;
    User.findOne({name:sn})
    .exec()
    .then(doc=>{
     console.log("from database",doc);
     if (doc){
     res.status(200).json(doc);}
     else{
       res.status(404).json({message:'no valid entry found for provided serial number',
      output:0})
     }
    }).catch(err=>{console.log(err);
      res.status(500).json({error:err})
    });
    
   })

   router.get("/",(req,res,next)=> {
     User.find()
     .exec()
     .then(docs=>{
      console.log(docs);
      res.status(200).json(docs);
     })
     .catch(err=>{console.log(err);
       res.status(500).json({error:err});
     });
     
    })

    router.delete("/:SN",(req,res,next)=> {
      const sn =req.params.SN;
      User.findOneAndRemove({name:sn})
      .exec()
      .then(result =>{res.status(200).json(result)}
      )
      .catch(err=>{console.log(err);
        res.status(500).json({error:err});
      });
      
     })
   

     







module.exports = router;
