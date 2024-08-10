import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://render.fineartamerica.com/images/rendered/default/poster/5.5/8/break/images/artworkimages/medium/3/jaws-alternative-movie-poster-movie-poster-boy.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, praesentium.	",
  },

  {
    id: 2,
    title: "NEXT.JS Blog",
    img: "https://render.fineartamerica.com/images/rendered/default/poster/5.5/8/break/images/artworkimages/medium/3/thelma-and-louise-alternative-movie-poster-movie-poster-boy.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, praesentium.	",
  },

  {
    id: 3,
    title: "Vanilla js App",
    img: "https://render.fineartamerica.com/images/rendered/default/poster/5.5/8/break/images/artworkimages/medium/3/american-graffiti-alternative-movie-poster-movie-poster-boy.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, praesentium.	",
  },

  {
    id: 4,
    title: "Music App",
    img: "https://render.fineartamerica.com/images/rendered/default/poster/6/8/break/images/artworkimages/medium/3/back-to-the-future-bo-kev.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, praesentium.	",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
	
  const { scrollYProgress } = useScroll({
    target: ref,
		// offset: ["start start", "end start"]
  });

	const y = useTransform(scrollYProgress, [0,1], [-300,300])
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
