import Header from "../components/Header"
import { useDispatch } from "react-redux"
import { decrement } from "../state/creditsSlice";
import { useState } from "react";
import Loading from "./Loading";

const Dashboard = () => {

  const [prompt, setPrompt] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getImage = async () => {

    try {

      setIsLoading(true);

      const response = await fetch('http://localhost:3001/getImage', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt })
      }); 

      const data = await response.json();

      console.log(data);
      setImage(data.url[0]);

      setIsLoading(false);
      
    } catch (error) {
      console.error("Error fetching image", error);
    }
  }

  const getPrompt = async () => {
    const response = await fetch('http://localhost:3001/image/prompts', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    });
    const { randomPrompt }= await response.json();
    if (randomPrompt) {
      setPrompt(randomPrompt);
    }
  }

  const handleClick = () => {
    // dispatch(decrement("image"));
    if (prompt) {
      getImage();
      setPrompt("");
    }

  }

  const openNewWindow = () => {
    if (image) {
      window.open(image, "_blank");
    } 
 }

  return (
    <div className="overflow-x-hidden h-screen bg-gradient-to-bl from-orange-500 to-yellow-400">
      <Header />

      {/* Prompt and Result */}
      <div className="flex flex-col items-center gap-6 mt-10 mx-10 mb-10">

        {/* Form part */}
        <div className="flex flex-col items-center justify-center border-dotted border-[2px] border-black p-10">

            <div className="bg-neutral-500 md:h-[80px] md:w-[700px] h-[40px] w-full rounded-2xl lg:px-8 lg:py-4 py-1 px-4 flex items-center mx-10 md:mx-auto">
            <input 
            onChange={(e) => setPrompt(e.target.value)}
            type="text" 
            value={prompt}
            placeholder="Discover the extraordinary" 
            className="w-full outline-none outline-0 ring-0 bg-neutral-500 md:text-[25px] text-[18px] text-white"/>
            </div>

            <div className="flex gap-4 items-center mt-10">
                <button 
                onClick={handleClick}
                className="bg-black text-white px-8 py-4 font-semibold rounded-lg hover:opacity-80">
                    Get Image
                </button>
                <button 
                onClick={getPrompt}
                className="bg-white text-black px-8 py-4 font-semibold rounded-lg hover:opacity-80">
                    Give me some prompt
                </button>
            </div>

        </div>

        {/* Result Image */}

        {
          isLoading ? (
            <>
               <Loading />
               <p className="text-white font-serif font-semibold">
                Generating Image ...
                </p>
            </> 
          ) : (
            <div 
            onClick={openNewWindow}
            className="border-black border-dotted border-[2px] w-[700px] mx-6 cursor-pointer">
    
               {
                image ? (
                  <img
                  src={image} 
                  alt="image" 
                  className="object-fit"
                  />
                ) : (
                  <p className="w-full text-center my-10 font-medium">Image will be preview here</p>
                )
               }

            </div>
          )
        }

      </div>

      {/* All results yet */}

    </div>
  )
}

export default Dashboard
