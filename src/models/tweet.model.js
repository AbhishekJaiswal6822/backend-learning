import mongoose, { Schema } from "mongoose";

const tweetschema = new Schema({
    content: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{timestamps: true})

export const Tweet = mongoose.model("Tweet",tweetschema)