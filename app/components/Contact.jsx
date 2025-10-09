import { assets } from "@/assets/assets";
import { isCSSVariableName } from "motion";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";


const Contact = ({ isDarkMode, setisDarkMode }) => {
  const [Result, setResult] = useState("");

  const onSubmit = async (event) => {
    // document.getElementById('result').

    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4ceb2d2b-67b4-48c9-9a6c-21d2fad946ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20`}
      style={{
        backgroundImage: !isDarkMode
          ? `url(${assets.header_bg_color})`
          : "none",
      }}
    >
      <motion.h4
        className=" 
       initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      text-center mb-2 text-lg font-ovo"
      >
        Wanna Collaborate?
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        id="about"
        className="text-center text-5xl font-ovo"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7, type: "tween" }}
        className={` font-ovo text-center mx-auto my-5 w-fit ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        I would love to hear from you! If you have any questions, comments or
        feedback please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        onSubmit={onSubmit}
        className=" max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className={`border-[0.5px] flex-1  border-gray-400  p-3 outline-none rounded-md ${
              isDarkMode ? "bg-white/5" : "text-gray-800"
            }`}
            type="text"
            name="Name"
            id="name"
            required
            placeholder="Enter your name"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`border-[0.5px] flex-1  border-gray-400  p-3 outline-none rounded-md ${
              isDarkMode ? "bg-white/5" : " text-gray-800"
            }`}
            type="email"
            required
            name="Email"
            placeholder="Enter your email"
            id="mail"
          />
        </div>

        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          name="Message"
          required
          placeholder="Enter your message"
          rows={5}
          className={`border-[0.5px] flex-1  border-gray-400  p-4 w-full outline-none rounded-md mb-6 ${
            isDarkMode ? "bg-white/5" : "  text-gray-800"
          }`}
        ></motion.textarea>

        <motion.button
          whileHover={{scale:1.1}}
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.5, delay: 1.2 }}
          className={`py-3 cursor-pointer text-sm  flex  gap-2 items-center justify-center px-7 mx-auto rounded-full duration-200 w-max  ${
            isDarkMode
              ? " border-[0.5]  hover:bg-white/10"
              : " bg-black/80 hover:bg-black text-white"
          }`}
          type="submit"
        >
          Submit now
          <Image alt="" className=" w-4" src={assets.right_arrow_bold_dark} />
        </motion.button>
      </motion.form>

      <p
        id="result"
        className={`mt-10 text-center text-sm ${
          Result == "" ? "hidden" : "block"
        }`}
      >
        {Result}
      </p>
    </motion.div>
  );
};

export default Contact;
