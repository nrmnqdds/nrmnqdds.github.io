import { motion, SVGMotionProps } from "framer-motion";

export function More(props) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="2"
        y1="10"
        x2="18"
        y2="10"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="18"
        x2="10"
        y2="2"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

export function Less(props) {
  return (
    <motion.svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="2"
        y1="10"
        x2="18"
        y2="10"
        stroke="black"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
