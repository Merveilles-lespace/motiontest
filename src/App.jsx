import { useState, useRef } from 'react';
import { motion } from "framer-motion";

function App() {
  const constraintsRef = useRef(null);

  return (
    <>
    <div
    ref={constraintsRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f0f0f0",
        width: "120em"
      }}
    >
       <motion.div
       style={{
         width: 100,
        height: 100,
        backgroundColor: "#dd00ee",
        borderRadius: "50%",
       }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            
        />

        <motion.div
        style={{
        width: 100,
        height: 100,
        backgroundColor: "#9911ff",
        borderRadius: 5,
        }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            
        />

         <motion.div ref={constraintsRef} 
         style={{
              width: 300,
              height: 300,
              backgroundColor: "var(--hue-1-transparent)",
              borderRadius: 10,
         }} >
            <motion.div
            style={{    
              width: 100,
              height: 100,
              backgroundColor: "#ff0088",
              borderRadius: 10,}}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
              
            />
            
        </motion.div>

    </div>
      
    </>
  )
}

export default App
