'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import MyServices from "./components/MyServices";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <MyServices/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  );
}
