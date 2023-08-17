import Header from "./Header"
import { AnimatePresence } from "framer-motion"

const Home = () => {

  return (
    <AnimatePresence>
       <div className="overflow-x-hidden bg-gradient-to-b from-[#d0e] to-[#91f] h-screen">
      <Header />
      
    </div>
    </AnimatePresence>
  )
}

export default Home
