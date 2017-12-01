const express  = require('express');
const path     = require('path');

const app = express()
    , PORT = process.env.PORT || 3000
    , STATIC = path.join(__dirname, '/public');


// Files will be served in from this folder
app.use(express.static(STATIC));

// Setting handlebars rendering engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render(__dirname + '/components/index.hbs');
});


app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT}`);
});