import { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_w079tfj", "template_ymwcxfc", formRef.current, {
        publicKey: "KKwh1Jajv3fb0eAZa",
      })
      .then(
        () => {
          setSuccess(true);
          // console.log("SUCCESS!");
        },
        (error) => {
          setError(true);
          // console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>react@react.com</span>
        </motion.div>

        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>react street, sam city</span>
        </motion.div>

        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+998 099 1202</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.svg
            width="450px"
            height="450px"
            viewBox="0 0 32.666 32.666"
            initial={{ pathLength: 0 }}
            animate={isInView && { pathLength: 1 }}
            transition={{ duration: 3 }}
          >
            <path
              strokeWidth={0.2}
              fill="none"
              d="M16,2c-7.727,0 -14,6.273 -14,14c0,7.727 6.273,14 14,14c7.727,0 14,-6.273 14,-14c-0,-7.727 -6.273,-14 -14,-14Zm-6.729,10.345l0.15,0.259l6.23,10.792l0.866,0.5c0,0 -0.861,-0.493 -0.861,-0.493l0.15,0.26c0.475,0.824 1.378,1.386 2.555,1.483c0.993,0.082 2.117,-0.184 3.119,-0.763c1.121,-0.647 2.118,-1.223 2.118,-1.223c0.478,-0.276 0.642,-0.887 0.366,-1.366l-2.077,-3.597c-0.276,-0.478 -0.888,-0.642 -1.366,-0.366l-0.866,0.5c0,-0 -3.846,-6.662 -3.846,-6.662c-0,0 0.866,-0.5 0.866,-0.5c0.478,-0.276 0.642,-0.888 0.366,-1.366l-2.077,-3.597c-0.276,-0.479 -0.888,-0.642 -1.366,-0.366c0,-0 -0.997,0.575 -2.118,1.223c-1.002,0.578 -1.795,1.419 -2.22,2.319c-0.505,1.068 -0.469,2.131 0.006,2.955l0.005,0.008Zm8.117,10.058l-6.39,-11.066c-0.177,-0.307 -0.118,-0.702 0.07,-1.1c0.267,-0.566 0.782,-1.079 1.412,-1.442c0,-0 1.252,-0.723 1.252,-0.723c0,-0 1.077,1.865 1.077,1.865c-0,0 -0.866,0.5 -0.866,0.5c-0.478,0.276 -0.642,0.888 -0.366,1.366l4.846,8.394c0.276,0.478 0.888,0.642 1.366,0.366l0.866,-0.5c0,-0 1.077,1.865 1.077,1.865c0,0 -1.252,0.723 -1.252,0.723c-0.63,0.364 -1.331,0.553 -1.955,0.502c-0.43,-0.035 -0.794,-0.176 -0.976,-0.47l-0.161,-0.28Z"
            />
          </motion.svg>
        </motion.div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
