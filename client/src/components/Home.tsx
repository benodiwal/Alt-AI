import Header from "./Header"
import { AnimatePresence } from "framer-motion"
import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { setCredits } from "../state";

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCredits({credits: 100}));
  }, [dispatch]);

  return (
    <AnimatePresence>
       <div className="overflow-x-hidden bg-gradient-to-b from-[#d0e] to-[#91f] h-screen">
      <Header />
      
    </div>
    </AnimatePresence>
  )
}

export default Home
