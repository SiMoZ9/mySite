const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()
const PORT = 5050
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error during DB connection'))
db.once('open', () => {
    console.log('Database successfully connected!');
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})