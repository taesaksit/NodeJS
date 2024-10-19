require('dotenv').config()
const express = require("express");
const axios = require('axios')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes/product'))


const fetchGoldPrice = async () => {
    try {
        const response = axios.get()
    } catch (err) {
        console.log(err)
    }
}

app.listen(process.env.PORT, () => {
    console.log('SERVER RUNNING ON PORT ' + process.env.PORT)
    setInterval()
})