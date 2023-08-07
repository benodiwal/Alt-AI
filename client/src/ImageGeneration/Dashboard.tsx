import Header from "../components/Header"
import { useDispatch } from "react-redux"
import { setService } from "../state"

const Dashboard = () => {
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setService({payload: "image"}));  
  }

  return (
    <div className="overflow-x-hidden h-screen bg-gradient-to-bl from-orange-500 to-yellow-400">
      <Header />

      {/* Prompt and Result */}
      <div className="flex lg:flex-row flex-col items-center gap-6 mt-10 mx-10">

        {/* Form part */}
        <div className="flex flex-col items-center justify-center border-dotted border-[2px] border-black p-10">

            <div className="bg-neutral-500 md:h-[80px] md:w-[700px] h-[40px] w-full rounded-2xl lg:px-8 lg:py-4 py-1 px-4 flex items-center mx-10 md:mx-auto">
            <input type="text" placeholder="Discover the extraordinary" className="w-full outline-none outline-0 ring-0 bg-neutral-500 md:text-[25px] text-[18px] text-white"/>
            </div>

            <div className="flex gap-4 items-center mt-10">
                <button 
                onClick={handleClick}
                className="bg-black text-white px-8 py-4 font-semibold rounded-lg hover:opacity-80">
                    Get Image
                </button>
                <button className="bg-white text-black px-8 py-4 font-semibold rounded-lg hover:opacity-80">
                    Give me some prompt
                </button>
            </div>

        </div>

        {/* Result Image */}
        <div className="border-black border-dotted border-[2px] w-[700px] h-[400px] mx-6">
            <img src="/ai.webp" alt="image" className="w-full h-full object-cover"/>
        </div>

      </div>

      {/* All results yet */}

    </div>
  )
}

export default Dashboard
