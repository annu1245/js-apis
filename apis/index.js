const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

const apiData = require('./data.json');

app.get('/', (req, res) => {
    res.json(apiData);
})

app.listen(PORT, () => {
    console.log("app started")
})