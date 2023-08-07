import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50
        },
        id: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default: "",
        },
        credits: {
            type: Number,
            default: 3,
        }
    })

    const User = mongoose.model("User", UserSchema);
    export default User