const mongoose = require ('mongoose')
const { StringDecoder } = require('string_decoder')

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