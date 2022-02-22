//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint nanti ditambahkan di sini
const admin = require('./routes/admin')
app.use("/admin", admin)

const customer = require('./routes/customer');
app.use("/customer", customer)

//run server
app.listen(8080, () => {
    console.log('server run on port 8080')
})