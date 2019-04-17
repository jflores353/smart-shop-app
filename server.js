const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodypasrser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected ...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.port || 5000; // This setup will allow us to sync up with Heroku when ready to deploy

app.listen(port, () => console.log(`Server started on port ${port}`));