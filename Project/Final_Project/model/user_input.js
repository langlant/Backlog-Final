const mongoose = require('mongoose')
const Schema = mongoose.Schema

var user_input_Schema = new Schema({
    title: String,
    media: {type: String, default: null},
    description: {type: String, default: null},
    genre: {type: String, default: null},
    bstatus: {type: String, default: null},
    published_data:{type: Date, default: Date.now},
    user_id: {type: String, default: null}
})

module.exports = mongoose.model('user_input', user_input_Schema)