const mongoose = require('mongoose')

const dbConnect = module.exports = ()=>{
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('DATABASE CONNECTION SUCCESS'))
        .catch(error => console.log('DATABASE CONNECTION ERROR'))
}

