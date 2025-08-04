import mongoose , {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt, { compare } from "bcrypt"

// pre hooks is a middleware that applies checkin before saving the data like password encryption

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname:{
        type: String,
        required: true,
        trim: true
    },
    avatar:{
        type: String, // cloudinary url
        required: true,
    },
    coverImage:{
        type:String, // cloudinary url
    },
    watchHistory:[{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }],
    password:{
        type: String,
        required: [true,"Password is required"]
    },
    refreshToken:{
        type:String
    }
},{timestamps:true})

userSchema.pre("save", async function (next){
    if (! this.password) return next(); // if paasword is not modified then it will retrun from here
    this.password = await bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        REFRESH_TOKEN_SECRET,
        {
            expiresIn:REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User",userSchema)