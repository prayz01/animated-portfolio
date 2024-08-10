import { motion, useInView } from "framer-motion";
import "./services.scss";
import { useRef } from "react";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <div className="textContainer">
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            fugiat minus, inventore enim blanditiis ipsa ab doloribus pariatur
            ullam corporis. Perspiciatis repellat accusantium facilis? Odio
            vitae incidunt voluptas itaque ipsum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            fugiat minus, inventore enim blanditiis ipsa ab doloribus pariatur
            ullam corporis. Perspiciatis repellat accusantium facilis? Odio
            vitae incidunt voluptas itaque ipsum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            fugiat minus, inventore enim blanditiis ipsa ab doloribus pariatur
            ullam corporis. Perspiciatis repellat accusantium facilis? Odio
            vitae incidunt voluptas itaque ipsum.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            fugiat minus, inventore enim blanditiis ipsa ab doloribus pariatur
            ullam corporis. Perspiciatis repellat accusantium facilis? Odio
            vitae incidunt voluptas itaque ipsum.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
