import { useEffect } from "react";
import "./Xactlane.css";

// import image1 from "../../../../assets/Image/1591.png";
import image1 from "./Image/1591.png";

import image2 from "./Image/1592.png";
import image3 from "./Image/1593.png";
import image4 from "./Image/image4.png";

const CircleCarousel = () => {
  useEffect(() => {
    // Load jQuery script
    const jqueryScript = document.createElement("script");
    jqueryScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js";
    jqueryScript.async = false;
    document.body.appendChild(jqueryScript);

    // Load car.js script
    const carScript = document.createElement("script");
    carScript.src = "https://exactlane.com/assets/car.js";
    carScript.async = false;
    document.body.appendChild(carScript);

    // Clean up function to remove the scripts when the component unmounts
    /*return () => {
      document.body.removeChild(jqueryScript);
      document.body.removeChild(carScript);
    };*/
  }, []); // Empty
  return (
    <div id="blade">
      {/* <div className="mentor v-class">
        <p>BUSINESS VAN/SUV</p>
      </div>
      <div className="mentor minibus">
        <p>MINIBUS</p>
      </div>
      <div className="mentor e-class">
        <p>BUSSINESS CLASS</p>
      </div> */}
      {/* <div className="mentor s-class">
        <p>FIRST CLASS</p>
      </div>
      <div className="mentor stretch">
        <p>STRECH LIMO</p>
      </div>
      <div className="mentor coach">
        <p>COACH</p>
      </div>
      <div className="mentor economy">
        <p>ECONOMY CLASS</p>
      </div> */}
      <div id="circle-carousel" className="circle-carousel">
        <div
          className="circle-carousel__item"
          data-num={1}
          data-mentorid="v-class"
          data-background={image1}
        >
          <div
            style={{
              backgroundImage: `url(${image1})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={2}
          data-mentorid="minibus"
          data-background={image2}
        >
          <div
            style={{
              backgroundImage: `url(${image2})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item active"
          data-num={3}
          data-mentorid="e-class"
          data-background={image3}
        >
          <div
            style={{
              backgroundImage: `url(${image3})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={4}
          data-mentorid="s-class"
          data-background={image4}
        >
          <div
            style={{
              backgroundImage: `url(${image4})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={5}
          data-mentorid="stretch"
          data-background={image1}
        >
          <div
            style={{
              backgroundImage: `url(${image1})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={6}
          data-mentorid="coach"
          data-background={image1}
        >
          <div
            style={{
              backgroundImage: `url(${image1})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={7}
          data-mentorid="economy"
          data-background={image2}
        >
          <div
            style={{
              backgroundImage: `url(${image2})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={8}
          data-mentorid="v-class"
          data-background={image3}
        >
          <div
            style={{
              backgroundImage: `url(${image3})`,
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={9}
          data-mentorid="minibus"
          data-background={image4}
        >
          <div
            style={{
              backgroundImage: `url(${image4})`,
            }}
          />
        </div>
        {/* <div
          className="circle-carousel__item"
          data-num={10}
          data-mentorid="e-class"
          data-background="https://www.mercedes-benz.com/en/mbsocialcar/mbsocialcar-e-class/_jcr_content/root/slider_4/sliderchilditems/slideritem_1/image/MQ7-0-image-20190114132818/02-mercedes-benz-vehicles-e-class-e-200-w-213-3400x1440.jpeg"
        >
          <div
            style={{
              backgroundImage:
                'url("https://www.limos4.com/wp-content/uploads/2018/07/business-class-fs8.png")',
            }}
          />
        </div> */}
        {/* <div
          className="circle-carousel__item"
          data-num={11}
          data-mentorid="s-class"
          data-background="http://www.hdcarwallpapers.com/walls/2015_maybach_mercedes_benz_s_class-HD.jpg"
        >
          <div
            style={{
              backgroundImage:
                'url("https://www.limos4.com/wp-content/uploads/2018/07/first-class-fs8.png")',
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={12}
          data-mentorid="stretch"
          data-background="https://fivestarlimonv.com/wp-content/uploads/IMG_5427.jpg"
        >
          <div
            style={{
              backgroundImage:
                'url("https://www.limos4.com/wp-content/uploads/2018/07/stretch-limo-fs8.png")',
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={13}
          data-mentorid="coach"
          data-background="https://s1.1zoom.me/b5252/40/Bus_2015-17_Neoplan_Skyliner_Black_537243_3840x2160.jpg"
        >
          <div
            style={{
              backgroundImage:
                'url("https://www.limos4.com/wp-content/uploads/2018/07/bus-fs8.png")',
            }}
          />
        </div>
        <div
          className="circle-carousel__item"
          data-num={14}
          data-mentorid="economy"
          data-background="https://www.elsetge.cat/myimg/f/153-1532762_4k-skoda-octavia-2018-cars-road-gray-octavia.jpg"
        >
          <div
            style={{
              backgroundImage:
                'url("https://www.limos4.com/wp-content/uploads/2018/08/economy-class-limousine.png")',
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default CircleCarousel;
