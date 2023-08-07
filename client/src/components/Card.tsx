import { motion, Variants } from "framer-motion";

const Card = () => {

  const cardVariants : Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        }
    }
}

  return (
    <motion.div
    initial="offscreen"
    animate="onscreen"
    className="overflow-hidden flex items-center justify-center relative pt-[20px] mb-[-120px]"
    viewport={{ once: true, amount: 0.8 }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0"/>
      <motion.div className="" variants={cardVariants}>

      </motion.div>
    </motion.div>
  )
}

export default Card
