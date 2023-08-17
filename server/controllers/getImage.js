import Replicate from "replicate";

const getImage = async (req, res) => {
    const { prompt } = req.body;

    /* REPLICATE SETUP */
    const replicate = new Replicate({
        auth: process.env.REPLICATE_API_TOKEN,
      });
      
    const model = "stability-ai/sdxl:a00d0b7dcbb9c3fbb34ba87d2d5b46c56969c84a628bf778a7fdaec30b1b99c5";
    const input = { prompt };
    const output = await replicate.run(model, { input });
      
    console.log(output);

    res.status(200).json({ url: output });
}

export default getImage;