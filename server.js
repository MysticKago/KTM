const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const Message = require('./models/message');

const PORT = process.env.PORT || 5000;
//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://mystic:mysticadmin@cluster0.n69dk.mongodb.net/personal?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT, console.log(`Server is starting at ${PORT}`)))
  .catch((err) => console.log(err));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.post('/mes', (req, res) => {
  const { email, subject, body } = req.body;

  console.log(email, subject, body);

  const message = new Message(req.body);

  message.save()
    .then(result => {
      res.send('Message Sent')
    })
    .catch(err => {
      console.log(err);
    })
})