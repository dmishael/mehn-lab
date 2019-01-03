

const newsController = {
    // console.log('path "/" accessed')
    index: (req, res) => {
        Newslink.find({}).then(newslinks => {
            console.log(newslinks)
            res.render('/', { newslink: newslink })
        })
    }
}

module.exports = newsController