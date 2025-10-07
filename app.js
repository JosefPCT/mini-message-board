const express = require ('express');

const indexRouter = require('./routes/indexRoute');
const newRouter = require('./routes/newRoute')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


app.use(express.urlencoded( {extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT);
})