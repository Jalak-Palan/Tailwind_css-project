import React from "react";
import Hero from "../components/Hero";
import Partner from "../components/partner";
import Services from "../components/Services";
import Image1 from "../components/Image1";


export default function Home() {
  return (
    <div>
      <Hero />
      <Partner/>
      <Services />
      <Image1 />
    </div>
  );
}