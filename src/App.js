import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Pricing } from "./components/Pricing";
import { Blog } from "./components/Blog"
import { Footer } from "./components/Footer";


function App() {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <Services/>
      <About/>
      <Portfolio/>
      <Pricing/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
