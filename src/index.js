const express = require("express")
require('dotenv').config();

const app=express()

app.get("/api/user",(req,res)=>{
    res.send("get all users")
})

app.post("/api/user" , (req,res)=>{
    res.send("save user")
})

app.delete("/api/user" , (req,res)=>{
    res.send("remove user")
})

app.put("/api/user" , (req,res)=>{
    res.send("update user")
})

app.listenerCount(process.env.PORT)