require('../config/database_config');

const monngose = require('mongoose');
const User = monngose.model('user');
const Details = monngose.model('details');
const bcrypt = require('bcrypt');
const passport = require('passport');
const jwt =  require('jsonwebtoken');
require('../config/Passport');

//register the user function 

module.exports.adduser = async(req,res) =>{
     const password = req.body.password;
     const encryptedpassword = await bcrypt.hash(password,12);

     var adduser = new User({
         name:req.body.password,
         email:req.body.email,
         dob:req.body.dob,
         password:encryptedpassword,
     })

     adduser.save().then((data)=>{
         return res.status(200).json({
             status:200,
             success:true,
             message:"New User is  Registered ",
             data:data
         })
     })
     .then((error)=>{
         return res.status(400).json({
             status:400,
             success:false,
             message:"There is some error in Registeration",
             error:error

         })
     })
}

module.exports.fetchuser = (req, res) => {
    User.find()
      .then((data) => {
        return res.status(200).json({
          status: 200,
          success: true,
          message:'all the  user data',
          data: data,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          status: 400,
          success: false,
          message:'there is some error',
          err: err,
        });
      });
  };

  //login 

  exports.userlogin = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) res.status(404).json({
        status:400,
          success:false,
          err:err,
      });
      if (user)
        return res.status(200).json({
          status:200,
          success:true,
          token: jwt.sign({ id: user.id }, "SECRETKEY007", {
          expiresIn: "60m",
          })
        });
      if (info) return res.status(401).json({
        status:401,
          success:false,
          err:info,
      });
    })(req, res, next);
  };
  
  // fetch by id
  
  module.exports.fetchsingleuser = (req, res) => {
    User.findById({ _id:id.id })
      .then((data) => {
        return res.status(200).send({
          status: 200,
          success: true,
          message:`There is the data of id => ${id.id} `,
          data: data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          status: 400,
          success: false,
          messgae:`There is some Error of id=> ${req.params.id}`,
          err: err,
        });
      });
  };



  //delete user form db 

  module.exports.deleteuser = (req, res) => {
    User.findByIdAndRemove({ _id: id.id })
      .then(() => {
        return res.status(200).send({
          status: 200,
          success: true,
          message: `user is deleted ${id.id}`,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          status: 400,
          success: false,
          err: err,
        });
      });
  };


  //updateuser from db 

  module.exports.updatesingleuser = (req, res) => {
    User.findByIdAndUpdate({ _id: id.id }, { $set: req.body })
      .then((data) => {
        return res.status(200).send({
          status: 200,
          success: true,
          data: data,
        });
      })
      .catch((err) => {
        return res.status(400).send({
          status: 400,
          success: false,
          err: err,
        });
      });
  };


  module.exports.adddetails = async (req,res)=>{
      console.log(req.body);
      var adddetails = await new Details({
          _id:id.id,
          country:req.body.country,
          state:req.body.state,
          city:req.body.city,
          books:req.body.books
      })
      adddetails.save().then((data)=>{
         return res.status(200).json({
              status:200,
              success:true,
              message:"details is add",
              data:data
          })

      })
      .catch((error)=>{
          return res.status(400).json({
              status:400,
              success:false,
              error:error
          })
      })
  }