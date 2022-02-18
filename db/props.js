//get host name
const host = 'https://randomprops.vercel.app'

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

    {

        "id": "3",
        "name": "Green Koala",
        "image": host + "/images/green_koala.png"
    },

    {
        "id": "4",
        "name": "Gummy Bear",
        "image": host + "/images/gummy_bear.png"
    },

    {

        "id": "5",
        "name": "Honey Badger",
        "image": host + "/images/honey_badger.png"
    },

    {

        "id": "6",
        "name": "Kitty Cat",
        "image": host + "/images/kitty_cat.png"
    }

]



module.exports = {
    props : data
}

