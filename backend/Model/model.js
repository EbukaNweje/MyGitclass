const mongoose = require ('mongoose')

const classModel = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    }, 
    email:{
        type:String
    }
})

const work = mongoose.model('model', classModel)

module.exports = work