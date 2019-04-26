const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

var cors = require('cors');


const items = require('./routes/api/items');

const app = express();
app.use(cors());

// Bodypasrser Middleware
app.use(bodyParser.json());

// DB Config
const db = process.env.MONGO_URI;

//Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected ...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000; // This setup will allow us to sync up with Heroku when ready to deploy

app.listen(port, () => console.log(`Server started on port ${port}`));