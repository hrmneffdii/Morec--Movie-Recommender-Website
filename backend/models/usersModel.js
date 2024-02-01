import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
        {
        nama : {
            type : String,
            required : true
        },
        role : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        },
        password : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)
const Users = mongoose.model('Users', usersSchema)

export default Users