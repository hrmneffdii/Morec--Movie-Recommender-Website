import express from "express"
import {exec} from 'child_process';

const recommendationsRoutes = express.Router()

recommendationsRoutes.get('/:title', async (req, res)=>{
    const title = req.params.title
    exec(`python3 predict.py "${title}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        return res.json({recommendations : stdout})
    });
})

export default recommendationsRoutes