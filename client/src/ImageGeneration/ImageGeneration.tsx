import { motion, AnimatePresence } from "framer-motion"
import Header from "../components/Header"
import { useNavigate } from "react-router-dom"

const ImageGeneration = () => {

  const navigate = useNavigate();

  const burstingAnimation = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 90,
      x: 1000,
      y: 500
    },
    visible: (i: any) => {
      
      const delay = 1 + i*0.5;
      
      return {
      opacity: 1,
      scale: 1,
      x: 0,
      rotate: 0,
      y: 0,
      transition: {
        delay,
        ease: "easeOut",
        duration: 1,
      }
    }
  }
  }

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-tr from-orange-500 to-yellow-400">
      <Header />

      <AnimatePresence>
      <div className="flex items-center justify-center mt-10 lg:gap-10 gap-3">
        
        <motion.div
        variants={burstingAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        custom={-1}
        >
          <p className="text-gray-800 md:text-[60px] text-[35px] font-bold">Image</p>
        </motion.div>

        <motion.div
        variants={burstingAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        custom={0}
        >
          <p className="text-white md:text-[60px] text-[35px] font-bold">Generation</p>
        </motion.div>

      </div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        exit={{ x: -1000 }}
        transition={{ duration: 1.9 }}
        className="flex items-center mt-[100px] justify-center"
        >
          
          <button
          onClick={()  => navigate("/generation/dashboard")}
           className="bg-white text-black font-semibold md:text-[30px] md:px-10 lg:py-4 rounded-xl hover:opacity-80">
            Unleash your vision
          </button>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center flex-col gap-4 mt-20">
        <h1 className="text-[30px] text-black">Some of the images created by Alt AI.</h1>
      </div>
    
    </div>
  )
}

export default ImageGeneration
