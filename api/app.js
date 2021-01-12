const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 8000;

const app = express();

// this lets us parse 'application/json' content in http requests
app.use(bodyParser.json());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));


// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    // all unknown routes should be handed to our react app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
    });
}

// connecting either to production db or development db
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/athletesChallenge", 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log( '[CONNECTED] Database connected...' ))
.catch(err => console.error( err ));

app.listen(PORT, () => console.log(`[LISTENING] Port #${PORT}`));