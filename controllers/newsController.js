const Newslink = require('../models/Newslink');

const newsController = {
    // console.log('path "/" accessed')
    index: (req, res) => {
        Newslink.find({}).then(newslinks => {
            console.log(newslinks)
            res.render('newslink/index', { newslinks: newslinks });
        }).catch((error) => {
            console.log(error)
        })
    },
    new: (req, res) => {
        console.log('hello')
    },
    show: (req, res) => {
        console.log('why')
    },
    create: (req, res) => {
        console.log('yes')
    }
}

module.exports = newsController