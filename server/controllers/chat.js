const chat = async (req, res) => {
    const { prompt } = req.body;
    console.log(prompt);
}

export default chat