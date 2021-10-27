import express from "express"
import connectDB from "./config/db.js"
import config from "./config/config.js"
const app = express()

//Connecting with database
connectDB()

app.get('/',(req,res)=>{
    res.send("Hi I am Here")
})

import productRouter from './routes/product.js'
app.use('/',productRouter)

app.listen(config.PORT, () => console.log(`PORT ${config.PORT}`.magenta));