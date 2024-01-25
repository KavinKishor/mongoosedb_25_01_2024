const mongoose=require("mongoose")
const dataSchema=require("./schema")
const bcrypt=require("bcrypt")


let getData=async(req,res)=>{
    let findData=await dataSchema.find({})
    res.json(findData)
}

let postData=async(req,res)=>{
    const hass=await bcrypt.hash(req.body.password,7)
    const data=dataSchema({
        ...req.body,password:hass
    })
    const saveData=await data.save()
    res.json(saveData)
}

let putData=async(req,res)=>{
    const updateData=await dataSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
    res.json({update:updateData,msg:"datas updated"})
}

let delData=async(req,res)=>{
    const deleteData=await dataSchema.findByIdAndDelete(req.params.id)
    res.json({delete:deleteData,msg:"datas deleted"})
}

let Login=async(req,res)=>{
    const userEmail=await dataSchema.findOne({email:req.body.email})
    if(!userEmail)return res.json("email not correct")

    const userPass=await bcrypt.compare( req.body.password,userEmail.password)
    if(!userPass)return res.json("password incorrect")
    res.json("login successfully")
}

module.exports={getData,postData,putData,delData,Login}