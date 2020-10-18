const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require("dotenv").config();
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.use(morgan('tiny'));

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
  
    next();
  });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@portfolio.uqizy.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log('Database is connected successfully');
})

const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
});

const ContactModel = mongoose.model('ContactForm', ContactSchema);

app.post("/Response", (req, res) => {
    const data = req.body;
    const newRecord = new ContactModel(data);
    newRecord.save((error) => {
        if(error) {
            console.log('Error in Server Side');
        } else {
            console.log('Data has been recorded sucessfully');
            
            // sending mail to myself
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.EMAIL_PASSWORD,
                }
            });
            
            var mailOptions = {
                from: data.email,
                to: 'sngargrsd@gmail.com',
                subject: `Contact Form on your Portfolio - ${data.subject}`, 
                text: `MESSAGE: ${data.message} SUBJECT: ${data.subject} EMAIL: ${data.email}`,
            }

            transporter.sendMail(mailOptions, function(error, info) {
                if(error) {
                    console.log('Error in sending mail, ', error);
                } else {
                    console.log("Email sent, ", info.response);
                    res.json({
                        'message': "Message received."
                    })
                }
            })
        }
    })
});

// For deployment to Heroku
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(PORT, console.log(`Server is started at port ${PORT}`));