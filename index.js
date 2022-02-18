const express = require('express');
const app = express();
const path = require('path');
const props = require('./db/props');
const all_props = props.props;
const port = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, './views')));

app.get('/api/random', (req, res) => {
    
    const random_prop = all_props[Math.floor(Math.random() * all_props.length)];
    res.send(random_prop);
})



app.get('/api/all', (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(all_props);
})




app.listen(port, () => {

    console.log('App listening on port 3001!');
})