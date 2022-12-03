const express = require('express');
const bodyParser = require('body-parser');
const nodemailer= require('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', ()=>{
  resizeBy.send('welcome')
})

app.post('/api/form', (req, res)=>{
  const data = req.body;
  const smtpTransport=nodemailer.createTransport({
    host: 'smtp.yandex.ru',
    port: 465,
    auth: {
      user: 'wolf-rent@yandex.ru',
      pass: 'Wolves12345678!',
    },
  })

  const mailOptions=({
    from: 'wolf-rent@yandex.ru',
    to: 'oevkarpova@gmail.com',
    subject:`Message from ${data.fullname}`,
    html:`
    <h3>Info</h3>
    <ul>
      <li>fullname: ${data.fullname}</li>
      <li>phone: ${data.phone}</li>
      <li>email: ${data.email}</li>
    </ul>
    `
  });
smtpTransport.sendMail(mailOptions, (error, response)=>{
if(error){
  res.send(error)
} else{
  res.send("Success")
}
})

smtpTransport.close();

})

const PORT = 3001

app.listen(PORT, ()=>{
  console.log(`Server started at ${PORT}`)
})