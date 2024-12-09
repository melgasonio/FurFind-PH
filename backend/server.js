require('dotenv').config()

// dependencies
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const petReportsRoutes = require('./routes/petReports')


// middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PATCH,DELETE,PUT',
    credentials:  true
}))

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/petreports', petReportsRoutes)

app.use((error, res) => {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong. Please try again later.' })
})

mongoose.connect(process.env.MONGO_URI)

    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connecting to db and listening on port ${process.env.PORT || 4000}`)
        })
    })

    .catch((error) => {
        console.log('Database connection error:', error)
    })

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_APIKEY,
//     authDomain: process.env.FIREBASE_AUTHDOMAIN,
//     projectId: process.env.FIREBASE_PROJECTID,
//     storageBucket: process.env.FIREBASE_STORAGEBUCKET,
//     messagingSenderId: process.env.FIREBASE_SENDERID,
//     appId: process.env.FIREBASE_APPID
//   };    

 