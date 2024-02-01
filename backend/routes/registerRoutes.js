import Users from "../models/usersModel.js";
import express from "express"

const registerRoutes = express.Router()

registerRoutes.post('/', async (req, res)=>{
    try{

        if( !req.body.name || !req.body.email || !req.body.password || !req.body.role ){
            return res.status(200).json({message : "harap lengkapi data!"})
        }

        const User = await Users.findOne({email: req.body.email})

        if(User){
            return res.json({message : "email already exist!"})
        }

        const newUser = {
            "nama" : req.body.name,
            "role" : req.body.role,
            "email" : req.body.email,
            "password" : req.body.password
        }

        await Users.create(newUser)

        return res.json({
            message : "Register sucsessfully!",
            nama : req.body.name,
            role : req.body.role
        })

    }catch(err){
        throw err
    }
})

export default registerRoutes