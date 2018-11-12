const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

const items = require('./routes/api/items')

const app = express();

//BodyParser MiddleWare
app.use(bodyParser.json());

//DB Config (Keys.js)
const db = require('./config/keys').mongoURI;

//CONNECT TO MONGO DB
mongoose
  .connect(db, { useNewUrlParser: true })
.then(() => console.log('MongoDB Connected!!!'))
.catch(error => console.log(error));

//USE ROUTES HERE (gi zema od routite folderot itemite)
app.use('/api/items', items); //ova e gore konstantata ajtems

// Server  static assets if in production

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}!!`));


