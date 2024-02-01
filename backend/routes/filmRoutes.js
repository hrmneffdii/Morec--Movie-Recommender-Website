import express from "express"
import Films from "../models/filmModels.js"

const filmRoutes = express.Router()

filmRoutes.post('/', async (req, res)=>{
    const pageNumber = req.body.pageNumber
    const pageSize = 50
    const size = 7
    const skipAmount = (pageNumber - 1) * pageSize

    const films = await Films.aggregate([
        { $skip: skipAmount },
        { $limit: pageSize },
        { $sample: { size : size} }
      ])

    return res.json(films)
})

export default filmRoutes