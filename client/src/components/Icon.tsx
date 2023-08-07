import { motion } from "framer-motion"


const Icon = () => {

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: any) => {
            const delay = 1 + i*0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: "spring", duration: 1.5, bounce: 0},
                    opacity: {delay, duration: 0.01}
                }
            }
        }
    }

  return (
    <motion.svg
    initial="hidden"
    animate="visible"
    width="100"
    height="60"
    viewBox="0 0 100 60"
    >

        <motion.path 
        variants={draw}
        d="M0 60 L20 0 L40 60 H15"
        stroke="black"
        fill="none"
        custom={0.5}
        style={{ strokeWidth: 4 }}
        />

       <motion.path 
        variants={draw}
        d="M50 60 V0"
        stroke="black"
        fill="none"
        custom={1}
        style={{ strokeWidth: 4 }}
        />

    </motion.svg>
  )
}

export default Icon
