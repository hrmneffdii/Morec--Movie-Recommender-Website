// library
import mongoose from "mongoose";
import express  from "express";
import cors from "cors";
import dotenv from "dotenv";

// router
import loginRoutes from "./routes/loginRoutes.js";
import registerRoutes from "./routes/registerRoutes.js";
import filmRoutes from "./routes/filmRoutes.js";
import recommendationsRoutes from "./routes/recommendationsRoutes.js";

// models
import Users from './models/usersModel.js'
import Films from "./models/filmModels.js";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL; 
const database = process.env.DATABASE; ; 
const PORT = process.env.PORT 
const uri = `mongodb://${MONGODB_URL}/${database}`

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/users/:email', async (req, res)=>{
    const user = await Users.findOne({email : req.params.email})
    return res.status(200).json(user)
})

app.get('/api/users/selected/:title', async (req, res)=>{
    const film = await Films.findOne({title : req.params.title})
    return res.status(200).json(film)
})

app.use('/api/users/login', loginRoutes)
app.use('/api/users/register', registerRoutes)
app.use('/api/users/film', filmRoutes)
app.use('/api/users/recommendations', recommendationsRoutes)

mongoose
    .connect(uri)
    .then(()=>{
        console.log("Database are connected!")
        app.listen(PORT, (req, res)=>{
            console.log(`App listeing at port:${PORT}`)
        })
    })
    .catch((err)=>{
        throw err
    })

