const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'andreysandrey.10@gmail.com',
        pass: 'eezx atby aorc wyck'
    }
});


app.post('/sendMail', (req, res) => {
    let mailOptions = {
        from: 'andreysandrey.10@gmail.com',
        to: req.body.email,
        subject: 'Temporary Mail',
        text: `Hello this is a temporary mail`
    };
    try {
        transporter.sendMail(mailOptions, function(error){
            if (error) {
                console.log(error);
            } else {
                res.status(200).json({messege: "Email sent"});
            }
        });
        
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ error: error.message });
    }
    
   

    

})

app.listen(5000, () => {
    console.log('server is running on port 5000');
})