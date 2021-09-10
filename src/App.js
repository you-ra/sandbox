import { FramerTreeLayoutContext } from "framer-motion";
import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <motion.div
        style={{
          backgroundColor: "yellow",
          width: "100px",
          borderRadius: "10px"
        }}
        animate={{
          scale: 2,
          rotate: 45
        }}
      >
        This game has no name
      </motion.div>
    </div>
  );
}
