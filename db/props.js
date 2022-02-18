const path = require('path');
//get host name

const host = process.env.HOST || 'localhost:3001';

const data = [

    {
        "id": "1",
        "name": "Chocolate Dinosaur",
        "image": host + "/images/chocolate_dinosaur.png"
    },
    {
        "id": "2",
        "name": "Cookie Monster",
        "image": host + "/images/cookie_monster.png"
    },

]



module.exports = {
    props : data
}

