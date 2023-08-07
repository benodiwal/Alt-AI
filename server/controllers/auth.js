import mongoose from "mongoose";
import User from "../models/User.js";
import axios from "axios";

export const auth = async (req, res) => {
    const { token } = req.body;

    await axios.get("", {

    }).then(async (res) => {
        const { name, id, picture } = res.data;
        if (!id) return;

        const user  = User.findOne({
            id: id
        })

        if (!user) {
            const newUser = new User({
                name,
                id,
                picture
            })

            const savedUser = await newUser.save();
        }
    })
}