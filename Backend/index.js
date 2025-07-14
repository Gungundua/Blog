const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')

const app = express()
const PORT = 4000
app.use(express.json());

app.use(cors())

const connectdb = async () => {
    try {
        await mongoose.connect("mongodb+srv://gungun30dua:gungun30dua@cluster0.rhgd2iu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Database connected")
    } catch(error){
        console.log(error)
    }
}

connectdb()

app.post('/register', async (req,res)=>{
    console.log(req.body)
    const {username, password} = req.body
    console.log(username, password)
    const userData = await User.create({username, password})
    res.json(userData)
})

app.post('/login', (req,res)=>{
    console.log("request got")
    console.log(req.body)
    res.json("Working")
})

app.listen(PORT, ()=>console.log("Server started"))