import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Login = () => {
  
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleAccessToken = async (accessToken: string) => {

    try {
      const response = await fetch("http://localhost:3001/auth/google/callback",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ accessToken })
      });
      
      return response;

    } catch (error) {
      console.error("Error fetching details form the server", error);
    }

  }

  const signIn = useGoogleLogin({
    onSuccess: async (response) => {
      console.log("Google login success:", response);
      const data = await handleAccessToken(response.access_token);
      console.log(data);
    },
    onError: (error) => {
      console.error("Google login error:", error);
    },
  });

  return (
    <motion.div
    ref={ref}
    className="w-screen h-screen bg-gradient-to-b from-[#d0e] to-[#91f] flex justify-center items-center overflow-hidden">
    <div className="flex-col items-center justify-center mx-auto">

    <motion.ul
    drag
    onClick={() => navigate("/restore")}
    dragConstraints={ref}
    whileDrag={{ scale: 1.2 }}
    transition={{
      drag: { duration: 0.8 }
    }}
    layout
    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
    className="bg-transparent w-[200px] h-[200px] rounded-2xl flex flex-wrap items-center gap-2 justify-between p-3 border-black border-solid border-[4px] mx-auto"
    variants={container}
    initial="hidden"
    animate="visible"
    >
      {["Alt","", "", "AI"].map((value, i) => (
        <motion.li
        key={i}
        variants={item}
        className="bg-white w-[80px] h-[80px] rounded-full items-center justify-center flex">
          <p className="text-[30px] font-extrabold">{value}</p>
        </motion.li>
      ))}
    </motion.ul>

   <AnimatePresence initial={true}>
   <motion.div 
   onClick={signIn}
   initial={{ y: 2000 }}
   animate={{ y: 0 }}
   exit={{  y: 2000 }}
    whileHover={{
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }}
    whileTap={{
      scale: 1,
      transition: {
        duration: 0.3
      }
    }}
    transition={{
      duration: 1
    }}
    className="mt-10 bg-white rounded-xl py-3 px-8 text-center font-semibold text-[20px] flex items-center gap-4 cursor-pointer">
      <FaGoogle />
      <p>Sign in with Google</p>
    </motion.div>
   </AnimatePresence>

    </div>
    </motion.div>
  )
}

export default Login
