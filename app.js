const express = require('express');
const app = express();
const bp = require('body-parser');
const exphbs = require('express-handlebars');
const Articles = require('./db/articles.js');
const DS_Art = new Articles();


app.use(express.static('public'));

app.use(bp.urlencoded({ extended: true }));

app.engine('.hbs', exphbs({ layout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');


// app.get('/', (req, res) => {
//   res.send('Aloha');
// })

//render items
app.get('/', (req, res) => {
  const articles = DS_Art.all();
  console.log('articles', articles);
  res.render('home', { articles });
})

app.listen(process.env.PORT, () => {
  console.log(`Started app on port: ${process.env.PORT}`);
})