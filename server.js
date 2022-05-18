if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const stripeSecretKey = process.env.STRIPE_PUBLIC_KEY
// console.log(stripeSecretKey)

const express = require('express')
const app = express()
 
app.set('view engine', 'ejs')
app.use(express.static('public'))


app.listen(3000)