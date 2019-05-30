const express = require('express');
const massive = require('massive')
require('dotenv').config();
const products_controller = require('../controller/products_controller')
const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json());


massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db)    
    })
    .catch(error => console.log(error));



app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);









app.listen(SERVER_PORT, () => console.log(`listening on Port ${SERVER_PORT}`))