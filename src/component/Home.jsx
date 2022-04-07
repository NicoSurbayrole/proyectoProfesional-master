import Carousel from "./Carousel";
import Grid from "./Grid";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  
  
  return (
    <div>
      <Carousel />
      <div>
        <Grid/>
      </div>
    </div>
  );
};

export default Home;