import express from "express"
import Users from "../models/usersModel.js"

const loginRoutes = express.Router()

loginRoutes.post('/', async (req, res)=>{
    const email = req.body.email
    const password = req.body.password

    const User = await Users.findOne({email, password})

    if(User){
        return res.status(200).json({
            message : "login sucsessfully!",
            nama : User.nama,
            role : User.role
        })
    }else{
        return res.status(200).json({
            message : "login failed! Please check your email and password",
        })
    }
})

export default loginRoutes