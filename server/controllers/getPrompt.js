import { imagePrompts } from "../data/prompts.js";

const getPrompt = async (req, res) => {
    const randomPromptIndex = Math.floor(Math.random() * imagePrompts.length);
    const randomPrompt = imagePrompts[randomPromptIndex];

    if (randomPrompt) {
        res.status(200).json({ randomPrompt });
    } else {
        res.status(404).json({ error: "Unable to fetch prompt"});
    }
}

export default getPrompt;