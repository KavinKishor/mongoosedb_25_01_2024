const mongoose=require("mongoose")
const express=require("express");
const router = require("./router/router");

const app=express()

mongoose.connect("mongodb://localhost:27017/exedb3")
.then(()=>{
    console.log("db connected");
}).catch(()=>{
    console.log("db not connected");
})

app.listen(5001,()=>{
    console.log("server port number is:5001");
})
app.use(express.json())
app.use("/api",router)