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
        console.log(req.query.title)
        console.log(req.query.urlLink)
        console.log(req.query.description)
        console.log(req.query.createdAt)

        Newslink.create({
            urlLink: req.body.urlLink,
            title: req.body.title,
            description: req.body.description,
            createdAt: {
                type: Date.now()
            }

        }).then(newslink => {
            // Now that we've created the user, let's display it
            // by rendering the user show action for our new user:
            res.redirect(`/Newslink/${newslink._id}`);
        });
    }
}

module.exports = newsController