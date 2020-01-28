const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul> 
        <h3>Messages</h3>
        <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            auth: {
                user: 'jamesjobcontact@gmail.com',
                pass: 'Lastwords23%'
            }
        })

        let mailOptions = {
            from: 'test@testaccount.com',
            to: 'JamesLRobbins86@gmail.com',
            replyTo: 'test@testaccount.com',
            subject: "New Message",
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }
            console.log("Message Sent: %s", info.message)
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})