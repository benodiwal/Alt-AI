import Header from "../components/Header"

const PhotoRestore = () => {

  return (
    <div className="overflow-hidden h-screen bg-gradient-to-b from-blue-200 to-green-400">
      <Header />
      <div className="mt-20 flex flex-col items-center gap-[150px]">
        
        <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold text-gray-800/80">
          Restore any photo
        </h1>

        <div className="flex items-center justify-center border-dotted border-neutral-500 border-[2px] lg:w-[600px] lg:h-[200px] lg:mx-auto mx-4 w-[300px] h-[150px] md:w-[500px]">
          <button 
          onClick={() => alert("hello")}
          className="bg-black text-white lg:px-10 lg:py-4 px-5 py-2 rounded-xl hover:opacity-90 font-semibold">
            Upload an image
          </button>
        </div>

      </div>
    </div>
  )
}

export default PhotoRestore
