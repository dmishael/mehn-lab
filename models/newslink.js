const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Newslink = new Schema({
    urlLink: String,
    title: String,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})