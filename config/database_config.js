const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/CRUD",{useUnifiedTopology:true},{urlNewParser:true}).then(()=>{
 console.log("database connected")
})

.catch((err)=>{
 console.log(err);
})