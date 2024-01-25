const express=require("express")
const { postData, getData, putData, delData, Login } = require("../crudfunc")
const router=express.Router()

router.post("/create",postData)
router.get("/get",getData)
router.put("/update/:id",putData)
router.delete("/delete/:id",delData)
router.post("/login",Login)

module.exports=router