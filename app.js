const express = require ('express');

const indexRouter = require('./routes/indexRoute');

const app = express();
const PORT = 3000;

app.use('/', indexRouter);


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT);
})