import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

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
    <div id="contact" className=" w-full px-[12%] py-10 scroll-mt-20">
      <h4 className=" text-center mb-2 text-lg font-ovo">Wanna Collaborate?</h4>
      <h2 id="about" className="text-center text-5xl font-ovo">
        Contact Me
      </h2>

      <p
        className={` font-ovo text-center mx-auto my-5 w-fit ${
          isDarkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        I would love to hear from you! If you have any questions, comments or
        feedback please use the form below.
      </p>

      <form onSubmit={onSubmit} className=" max-w-2xl mx-auto">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            className={`border-[0.5px] flex-1  border-gray-400  p-3 outline-none rounded-md ${
              isDarkMode ? "bg-white/5" : "bg-white  text-gray-800"
            }`}
            type="text"
            name="Name"
            id="name"
            required
            placeholder="Enter your name"
          />
          <input
            className={`border-[0.5px] flex-1  border-gray-400  p-3 outline-none rounded-md ${
              isDarkMode ? "bg-white/5" : "bg-white  text-gray-800"
            }`}
            type="email"
            required
            name="Email"
            placeholder="Enter your email"
            id="mail"
          />
        </div>

        <textarea
          name="Message"
          required
          placeholder="Enter your message"
          rows={5}
          className={`border-[0.5px] flex-1  border-gray-400  p-4 w-full outline-none rounded-md mb-6 ${
            isDarkMode ? "bg-white/5" : "bg-white  text-gray-800"
          }`}
        ></textarea>

        <button
          className={`py-3 cursor-pointer text-sm  flex  gap-2 items-center justify-center px-7 mx-auto rounded-full duration-200 w-max  ${
            isDarkMode
              ? " border-[0.5]  hover:bg-white/10"
              : " bg-black/80 hover:bg-black text-white"
          }`}
          type="submit"
        >
          Submit now
          <Image alt="" className=" w-4" src={assets.right_arrow_bold_dark} />
        </button>
      </form>
      <p
        id="result"
        className={`mt-10 text-center text-sm ${
          Result == "" ? "hidden" : "block"
        }`}
      >
        {Result}
      </p>
    </div>
  );
};

export default Contact;
