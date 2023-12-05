require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const gamesRoutes = require('./routes/games');
const userRoute = require('./routes/user');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api', gamesRoutes);
app.use('/api', userRoute);


app.listen(8080, () => {
    console.log('Esta rodando.');
});

