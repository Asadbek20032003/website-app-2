import React from 'react'
import HeroSection from '../../HeroSection';
import {homeObjOne} from "../homePage/Data";
import Pricing from '../../Pricing';


function Services() {
  return (
    <div>
      <Pricing />
      <HeroSection {...homeObjOne}/>
    </div>
  )
}

export default Services;
