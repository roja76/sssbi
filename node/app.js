const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const path = require("path");
const port = 8000;
app.use(bodyParser.urlencoded({extended: false}));
// parse request data content type application/json
app.use(bodyParser.json());

app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
});
const postroute= require("./routes/postRoute")
const categoryroute  = require('./routes/categoryRoute')
app.use('/api/post',postroute)
app.use("/api/category",categoryroute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});