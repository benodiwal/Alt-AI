import Replicate from "replicate";

const restore = async (req, res) => {
    try {
        const uploadedPhoto = req.file.buffer;

        /* REPLICATE SETUP */
        const replicate = new Replicate({
            auth: process.env.REPLICATE_API_TOKEN,
        });

        const output = await replicate.run('tencentarc/gfpgan:9283608cc6b7be6b65a8e44983db012355fde4132009bf99d976b2f0896856a3', {
            input: {
              img: uploadedPhoto, // Convert buffer to base64 string
            },
          });

          console.log(output);

    } catch (error) {
        console.error("Error during restore", error);
    }
}

export default restore;