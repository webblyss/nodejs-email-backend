const express = require("express");
const path = require("path")
const router = express.Router();
const nodeMailer = require("nodemailer");



router.post("/send-email",(req,res)=>{
    const transport = nodeMailer.createTransport({
        service:process.env.SERVICE,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    });
    var mailOption = {
        from : req.body.sender,
        to:process.env.EMAIL,
        subject:'',
        text:req.body.message
    };
    transport.sendMail(mailOption,function(error,info){
        if(error) return res.status(401).json({error:"Message could not send"});
        res.status(200).json({message:"your form have been submitted"});
        console.log("message sent")
    })
})

module.exports = router