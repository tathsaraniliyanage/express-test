const express = require("express")

const app=express.Router()

app.get("/api/user",(req,res)=>{
    res.send("get all users")
})

