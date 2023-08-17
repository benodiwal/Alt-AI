import User from "../models/User.js";
import axios from "axios";

export const auth = async (req, res) => {
    const { accessToken } = req.body;
    console.log(accessToken);

    try {
        const response = await axios.get('https://people.googleapis.com/v1/people/me', {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params: {
              personFields: 'names,emailAddresses,photos', // Specify the fields you need
            },
          });

       console.log(response);

        if (!id) {
            res.status(400).json({ error: "Invalid id" });
            return;
        }

        let user = await User.findOne({ id });

        if (!user) {
            const newUser = new User({
                id,
                name,
                picture,
            });

            user = await newUser.save();
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "An error occurred" });
    }
};
