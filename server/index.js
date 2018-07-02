let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let MovieRoutes = require('./routes/MovieRoutes');

const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://cBoss:Drowssap21@ds121871.mlab.com:21871/advanced-checkpoint2");

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(MovieRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
