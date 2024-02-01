import mongoose from "mongoose";

const filmSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        tagline : {
            type : String,
            required : true
        },
        overview : {
            type : String,
            required : true
        },
    }
)

const Films = mongoose.model('Films', filmSchema)

export default Films