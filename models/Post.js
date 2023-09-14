import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        min: 2,
        max: 30,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    picturePath: String,
    userPicturePath: String,
    description: String,
    location: String,
    likes: {
        type: Map,
        of: Boolean,
    },
    comment: {
        type: Array,
        default: []
    }
}, { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema)

export default Post;