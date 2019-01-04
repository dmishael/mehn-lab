let Newslink = require('../models/Newslink')


let newNews = [
    {
        urlLink: 'https://www.potatoville.com',
        title: 'Crazy Potatoes',
        description: 'A bunch of crazy potatoes',
        createdAt: Date.now()
    },
    {
        urlLink: 'https://www.tomatoville.com',
        title: 'Crazy Totatoes',
        description: 'A bunch of crazy totatoes',
        createdAt: Date.now()
    }
]

Newslink.deleteMany({}).then(() => {
    Newslink.create(newNews).then(newslinks => {
        console.log('Saved Newslinks', newslinks)
    })
})