const mongoose = require('mongoose');

const Details = new mongoose.Schema({
    _id:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:'details'
    },
    country:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    books:[{
        book_name:{type:String},
        book_author:{type:String}
    }]

})

module.exports = mongoose.model('details',Details);