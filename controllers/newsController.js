const Newslink = require('../models/Newslink');

const newsController = {
    // console.log('path "/" accessed')
    index: (req, res) => {
        Newslink.find({}).then(newslinks => {
            console.log(newslinks)
            res.send(newslinks)
        })
    }
}

module.exports = newsController