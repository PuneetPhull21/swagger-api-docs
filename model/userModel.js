const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        required:"Name is required"
    },
    email:{
        type:String,
        require:true,
        required:"Email is Required"
    },
    dob:{
        type:String,
        require:true,
        requried:"Date of Birth is Required "
    },
    password:{
        type:String,
        require:true,
        required:"Password is Required"
    }
})



module.exports = mongoose.model('user',UserSchema);