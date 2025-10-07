const express = require ('express');

const indexRouter = require('./routes/indexRoute');
const messageRouter = require('./routes/messageRoute')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


app.use(express.urlencoded( {extended: true }));

app.use('/', indexRouter);
app.use('/new', messageRouter);


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT);
})