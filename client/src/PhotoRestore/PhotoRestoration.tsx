import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import { AnimatePresence, motion } from "framer-motion"

const PhotoRestoration = () => {

    const navigate = useNavigate();

    const draw = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: (i: any) => {
            const delay = 1 + i*0.5;
            return {
                opacity: 1,
                pathLength: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 0.8, bounce: 0},
                    opacity: { delay, duration: 0.01 }
                }
            }
        } 
    }

  return (
    <div className="h-screen overflow-x-hidden bg-gradient-to-t from-blue-200 to-green-400">

        {/* Header */}
      <Header />

      {/* Heading */}
      <AnimatePresence initial={true}>
        <div className="flex items-center justify-center text-center gap-3 mt-10">
        <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{
            duration: 0.7,
        }}
        className="flex items-center justify-center text-center gap-3"
        >
            <h1 className="lg:text-[60px] sm:text-[45px] text-[35px] font-bold text-gray-800/80">Restore</h1>
        </motion.div>
        <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{
            duration: 0.7,
        }}
        className="flex items-center justify-center text-center"
        >
            <h1 className="lg:text-[60px] sm:text-[45px] text-[35px] font-bold text-white">Photos</h1>
        </motion.div>
        </div>
      </AnimatePresence>
      <div className="lg:flex items-center justify-center hidden gap-3">
        <p className="text-white text-[30px]">
            using
        </p>
        <div>
        <motion.svg
        initial="hidden"
        animate="visible"
        width="90"
        height="140"
        viewBox="0 0 90 140"
        >
            <motion.path
            variants={draw}
            stroke="black"
            custom={0}
            fill="none"
            d="M10 130 L30 50 L60 130 H30"
            style={{ strokeWidth: 10 }}
            />
            <motion.path
            variants={draw}
            stroke="black"
            custom={0}
            fill="none"
            d="M80 135 V35"
            style={{ strokeWidth: 10 }}
            />
        </motion.svg>
        </div>
      </div>

      {/* Sub-heading */}
      <AnimatePresence initial={true}>
        <motion.div
        className="flex items-center mt-10"
        >
            <p className="max-w-[600px] text-center font-semibold mx-auto lg:text-[24px] md:text-[20px] text-[15px] text-gray-800/70">
            Unlock the Beauty of Your Memories with the Transformative Power of Photo Restoration AI
            </p>
        </motion.div>

      </AnimatePresence>

      {/* Buttons */}
      <div className="mt-10 items-center justify-center flex mx-3 gap-10">
      <button className="bg-black/80 py-3 lg:px-8 px-4 rounded-xl lg:text-[20px] md:text-[15px] text-[12px] text-white font-semibold  hover:opacity-80 cursor-pointer">
            Source Code
        </button>
        <button
        onClick={() => navigate("/restore/restore")} 
        className="bg-white py-3 px-8 rounded-xl text-black/80 font-semibold lg:text-[20px] md:text-[15px] text-[12px] hover:opacity-80 cursor-pointer">
            Restore Photos
        </button>
      </div>

      {/* Example */}
        <div className="flex-col flex items-center md:gap-3 gap-1 md:my-20 my-10 mx-3">
            <div className="flex flex-row items-center justify-center lg:gap-[200px] md:gap-[180px] sm:gap-[150px] gap-[100px] md:mb-2">
            <p className="font-semibold text-gray-800 lg:text-[23px] md:text-[21px] text-[18px] text-center">Original Photo</p>
            <p className="font-semibold text-gray-800 lg:text-[23px] md:text-[21px] text-[18px] text-center">Restored Photo</p>
            </div>
            
            <div>
                <img src="./image.jpg" alt="original" />
            </div>
        </div>
      
    </div>
  )
}

export default PhotoRestoration
