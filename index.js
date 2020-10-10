const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('tiny'));

app.listen(PORT, console.log(`Server is started at port ${PORT}`));