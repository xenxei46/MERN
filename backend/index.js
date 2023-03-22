const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

const api = process.env.API_URL;
// Middleware
app.use(express.json());
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
    const newProduct = req.body;
    console.log(newProduct)
    res.send(newProduct)
})

mongoose.connect(proess.env.CONNECTION_STRING)
.then(()=>{
  console.log('Database Connection is ready...')
})
.catch((err)=>{
  console.log('not connected')
})

app.listen(3000, ()=>{
  console.log(api);  
  console.log('server is running http://localhost:3000');
})