'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import MyServices from "./components/MyServices";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {

  const [isDarkMode, setisDarkMode] = useState("");

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)){
      setisDarkMode(true);
    }
    
    else{
      setisDarkMode(false);
      }
  
  }, [])
  

   useEffect(() => {
     if(isDarkMode)
     {
      document.documentElement.classList.add('dark');
      // document.documentElement.classList.add('text-white');
      localStorage.theme = 'dark'; 
     }
     
     else{
      document.documentElement.classList.remove('dark');
      // document.documentElement.classList.remove('text-white');
      
      localStorage.theme = '';
     }
   }, [isDarkMode])
   
  
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode}/>
      <Header isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <About isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <MyServices isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <Projects isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <Contact isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
      <Footer isDarkMode={isDarkMode} setisDarkMode = {setisDarkMode} />
    </>
  );
}
