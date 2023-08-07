import Header from "../components/Header"

const Moderation = () => {
  return (
    <div className="overflow-x-hidden h-screen w-full bg-gradient-to-b from-[#007bff] to-[#ffffff]">
      <Header />

      <div className="text-center">
        <p className="font-bold md:text-[55px] text-[40px] text-gray-800">
            Guardian
        </p>
        <p className="text-white md:text-[20px] text-[16px] font-semibold">
            Content moderation
        </p>
      </div>
      
      <div className="mx-10 flex items-center justify-center">
      <button className="bg-black mt-10 text-white py-1 px-3 rounded-lg font-semibold text-[22px] w-full md:w-[400px] hover:bg-opacity-80">
        Pick a video
      </button>
      </div>

     {/* Results */}
      <div>

      </div>

    </div>
  )
}

export default Moderation
