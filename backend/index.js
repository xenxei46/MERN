const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.API_URL

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

app.listen(3000, ()=>{
  console.log(api);  
  console.log('server is running http://localhost:3000');
})