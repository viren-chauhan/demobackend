require('dotenv').config();
const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/',(req,resp) => {
    resp.send("Hello World!");
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})