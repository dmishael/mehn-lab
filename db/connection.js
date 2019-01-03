const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/newslink").then(() => {
    console.log("MONGODB is now connected")
})

module.exports = mongoose;