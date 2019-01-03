let Newslink = require('../models/Newslink')

let newNewslink = [
    {
        urlLink: 'https://www.potatoville.com',
        title: 'Crazy Potatoes',
        description: 'A bunch of crazy potatoes',
        createdAt: {
            type: Date,
            default: Date.now()
        }
    }
]

