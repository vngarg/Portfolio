const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan('tiny'));

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@portfolio.uqizy.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log('Datebase is connected successfully');
})

app.listen(PORT, console.log(`Server is started at port ${PORT}`));