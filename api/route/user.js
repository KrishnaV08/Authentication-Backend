const express=require('express');
const router=express.Router();
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const User=require('../model/user');


router.post('/signup',(req,res,next)=>{    
      bcrypt.hash(req.body.password,10,(err,hash)=>{
      if(err){
         return res.status(500).json({
            error:err
         })
      }
      else{
         const user=new User({
            _id:new mongoose.Types.ObjectId,
            username:req.body.username,
            password:hash,
            email:req.body.email 
         })
         user.save()
         .then(result=>{
            res.status(200).json({
               new_user:result
            })
         })
         .catch(err=>{
            res.status(500).json({
               error:err
            })
         })
      }
   })
})



module.exports=router;