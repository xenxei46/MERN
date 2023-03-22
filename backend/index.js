const express = require('express');
const app = express();
const morgan = require('morgan');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');

const api = process.env.API_URL;
// Middleware
app.use(express.json());
// app.use(bodyParser.json())
app.use(morgan('tiny'))

app.get(`${api}/products`, (req, res) =>{
    const product = {
        id: 1,
        name: 'hair dresser',
        image: 'some_URLs',
    }
    res.send(product);
})
app.post(`${api}/products`, (req, res) =>{
    // const product = {
    //     id: 1,
    //     name: 'hair dresser',
    //     image: 'some_URL',
    // }
    // res.send(product);
    const newProduct = req.body;
    console.log(newProduct)
    res.send(newProduct)
})

// mongoose.connect(process.env.CONNECTION_STRING)
// .then(()=>{
//   console.log('Database Connection is ready...')
// })
// .catch((err)=>{
//   console.log('Database not connected')
// })

app.listen(4000, ()=>{
  console.log(api);  
  console.log('server is running http://localhost:4000');
})