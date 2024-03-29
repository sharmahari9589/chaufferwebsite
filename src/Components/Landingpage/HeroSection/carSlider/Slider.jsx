import React, { useEffect, useState } from "react";
import "./Slider.css";

import CarSlider1 from "../../../../../Images/CarSlider1.png";
import CarSlider2 from "../../../../../Images/CarSlider2.png";
import CarSlider3 from "../../../../../Images/CarSlider3.png";
import CarSlider4 from "../../../../../Images/CarSlider4.png";
import CarSlider5 from "../../../../../Images/CarSlider5.png";
import CarSlider6 from "../../../../../Images/CarSlider5.png";

const images = [
  // "https://cdn.d1baseball.com/logos/teams/256/georgemas.png",
  // "https://logos-download.com/wp-content/uploads/2016/06/Lockheed_Martin_logo.png",
  // "https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
  // "https://1000logos.net/wp-content/uploads/2019/11/facebook-logo-png.png",
  // "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  // "https://appcmsprod.viewlift.com/07f03878-2e8b-4f70-a4d9-ebb2a920da80/images/eagle-bank-arena.png",
  // "https://logodix.com/logo/1810537.png",
  // "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1280px-Deloitte.svg.png",
  // "https://www.cs.umd.edu/cscareerfair/sites/default/files/cs.umd.edu.openhouse/images/company/mitre_0.png",
  // "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/leidos-logo.png",
  // "https://cdn.discordapp.com/attachments/620652013088407595/697112575271239811/GMU_foundation.png",
  // "https://media.discordapp.net/attachments/620652013088407595/697112610730016778/Sodexo_logo.png",
  // "https://pac.gmu.edu/wp-content/uploads/2018/07/cropped-paclogogreen.png",
  CarSlider1,
  CarSlider2,
  CarSlider3,
  CarSlider4,
  CarSlider5,
  CarSlider6,
  CarSlider1,
  CarSlider2,
  CarSlider3,
  CarSlider4,
  CarSlider5,
  CarSlider6,
];

const TrustedSection = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        {images.map((item, i) => (
          <>
            <div key={i} className="slide">
              <img className="imageStyle" src={item} alt="" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
