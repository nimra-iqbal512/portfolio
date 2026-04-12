import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-auto sm:h-screen mx-auto">
      <div
        className={`${styles.paddingX} sm:absolute inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5 pt-[70px] sm:pt-0`}
        style={{
          top: "clamp(70px, 13vh, 250px)"  // min 80px, scales with viewport height, max 220px
        }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Nimra</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A full stack software Engineer. <br className="sm:block hidden" />
            I develop scalable web applications.
          </p>
        </div>
      </div>

      {/* Canvas — hidden on small screens */}
      <div className="absolute inset-0 w-full h-full hidden sm:block">
        <ComputersCanvas />
      </div>

      {/* Scroll indicator — hidden on small screens */}
      <div className="absolute hidden sm:bottom-2 bottom-10 w-full sm:flex justify-evenly items-center">
        <div className="invisible">dqwdq</div>
        <a href="#about" className="inline-block ml-12">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero