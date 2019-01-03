let Newslink = require('../models/Newslink')


let newNews = [
    {
        urlLink: 'https://www.potatoville.com',
        title: 'Crazy Potatoes',
        description: 'A bunch of crazy potatoes',
        createdAt: Date.now()
    }
]

Newslink.deleteMany({}).then(() => {
    Newslink.create(newNews).then(newslinks => {
        console.log('Saved Newslinks', newslinks)
    })
})