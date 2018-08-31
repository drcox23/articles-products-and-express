const express = require('express');
const app = express();
const bp = require('body-parser');
const exphbs = require('express-handlebars');


app.get('/', (req, res) => {
  res.send('Aloha');
})

app.listen(process.env.PORT, () => {
  console.log(`Started app on port: ${process.env.PORT}`);
})