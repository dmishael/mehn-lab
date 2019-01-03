

const newsController = {
    index: (req, res) => {
        Newslink.find({}).then(newslinks => {
            res.render('newslink/index', { newslink: newslink })
        })
    }
}

module.exports = newsController