 import {Fix} from 'react-icons/fi';
 import { AnimatePresence, motion } from "framer-motion";
export default function OverlayMenu({isOpen,onClose}){
const isMobile = typeof window !== "undifined" && window.innerwidth <1024;
const origin = isMobile ? "95% 8%" : "50% 8%"
return(
  <AnimatePresence>
    {isOpen &&(
      <motion.div className="fixed insert-0 flex-center justify-center z-50"
       initial = {{clipPath: `circle(0% at$(origin))`}}
       animate ={{clipPath: `circle(150% at $(origin))`}}
       exit={{clipPath: `circle(0% at $(origin))`}}
       transition={{duration:0.7,ease:(0.4,0.2,1)}}
       style={{background:"rgba(0,0,0,0.95)"}}
      
      
      >
     <button onClick={onClose} className='absolute top-0 right-6 text-white text-3xl'
     aria-label='Close Menu'
     >
      <Fix/>
     </button>
     <ul className='space-y-6 text-center'>
     {[
      "Home",
      "about",
      "Skills",
      "Project",
      "Experience",
      "testimonials",
      "Context",
     ].map{(item,index)=>(
      <motion.li key={item}
      initial={{opacity:0 ,y:20}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.3*index*0.1}}
      >
     <a href={`#${item.toLowerCase()}`}
      onClick={onclose}
      className='text-4xl text-white font-semibold hover:text-pink-400 transition colors duration-300'
     >
     {item}
     </a>
      </motion.li>
     )}
    }
     </ul>
      </motion.div>
    )}
  </AnimatePresence>
)
}

