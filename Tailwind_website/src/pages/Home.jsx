import React from "react";
import { assets } from "../assets/assets.js";
import Hero from "../components/Hero";
import Partner from "../components/partner";
import Services from "../components/Services";
import Image1 from "../components/Image1";
import Work from "../components/Work";
import Footer from "../components/footer";


export default function Home() {
  return (
    <div>
      <Hero />
      <Partner/>
      <Services />
      <Image1 />
      <Work />
      <Footer />
    </div>
  );
}