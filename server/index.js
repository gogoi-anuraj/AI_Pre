import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/connectDB.js"

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.get("/",(req, res)=>{
    res.json({message:"App running"})
})
app.listen(PORT, ()=>{
    console.log('server running on ', PORT)
    connectDB()
})