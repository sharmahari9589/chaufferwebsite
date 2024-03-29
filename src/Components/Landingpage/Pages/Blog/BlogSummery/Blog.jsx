import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Blog.module.css";

import Blog1 from "../../../../../../Images/Blog1.jpg";

import Blog2 from "../../../../../../Images/Blog3.jpg";
import Blog3 from "../../../../../../Images/Blog2.jpg";
import Blog4 from "../../../../../../Images/Blog4.jpg";
import { BookingProcessContext } from "../../../BookingProcessContext";
import { useParams } from "react-router-dom";

const BlogSummery = () => {
  const { handleWhiteHeader } = useContext(BookingProcessContext);

  const [blogs, setBlog] = useState({});

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleWhiteHeader(false);
    scrollToTop();
    return () => {
      handleWhiteHeader(true);
    };
  }, []);

  const BlogData = [
    {
      id: 1,
      Image: Blog1,
      Heading: "A COMPREHENSIVE GUIDE FOR CAR HIRE SERVICES IN GURGAON",
      Description:
        "When Exploring The Bustling City Of Gurgaon, Nothing Beats The Convenience And Freedom Of Hiring A Car. With Numerous Car Hire Service Providers Available, Choosing The One That Best Caters To Your Needs Can Be Daunting.",
      name: "James Colies",
      Date: "19 April 2023",
    },

    {
      id: 2,

      Image: Blog2,
      Heading: "A COMPREHENSIVE GUIDE FOR CAR HIRE SERVICES IN Delhi",
      Description:
        "When Exploring The Bustling City Of Gurgaon, Nothing Beats The Convenience And Freedom Of Hiring A Car. With Numerous Car Hire Service Providers Available, Choosing The One That Best Caters To Your Needs Can Be Daunting.",
      name: "Abhishek verma",
      Date: "17 April 2023",
    },
    {
      id: 3,

      Image: Blog3,
      Heading: "A COMPREHENSIVE GUIDE FOR CAR HIRE SERVICES IN Puna",
      Description:
        "When Exploring The Bustling City Of Gurgaon, Nothing Beats The Convenience And Freedom Of Hiring A Car. With Numerous Car Hire Service Providers Available, Choosing The One That Best Caters To Your Needs Can Be Daunting.",
      name: "Hari Colies",
      Date: "30 April 2023",
    },
    {
      id: 4,
      Image: Blog4,
      Heading: "A COMPREHENSIVE GUIDE FOR CAR HIRE SERVICES IN Indore",
      Description: `Berlin, the bustling capital of Germany, is a city that encapsulates history, culture, and modern innovations in a fascinating blend. A stroll through this vibrant metropolis is like a journey through time, from historical monuments to the trendy neighbourhoods of today.

        The rich history of Berlin is palpable at every corner. The Brandenburg Gate, a symbol of German unity, stands majestically, reminding us of the turbulent events of the 20th century. Nearby, the Berlin Reichstag, with its glass dome, not only showcases architectural brilliance but also offers breathtaking views of the city.
        
        Another historical site worth visiting is the East Side Gallery. This preserved section of the Berlin Wall is not only a symbol of overcoming Germany's division but also a canvas for artistic expressions and political messages.
        
        Berlin's cultural scene is as diverse as its history. The Museum Island, a UNESCO World Heritage site, hosts an impressive collection of museums, including the Pergamon Museum and the Neues Museum. Art enthusiasts will find delight in the Kulturforum, home to the Gemäldegalerie and the Neue Nationalgalerie.
        
        However, Berlin is not just about its historical sites. The city pulses with creativity and innovation, especially in neighborhoods like Kreuzberg and Friedrichshain. Here, street art adorns every corner, trendy cafes abound, and alternative boutiques thrive. The Mauerpark flea market is a hotspot for vintage lovers, while Görlitzer Park offers a relaxed atmosphere to sample local delights.
        
        Berlin's nightlife is legendary. The city is home to some of the best clubs in the world, including Berghain, renowned for its electronic music scene and strict door policy. But nightlife isn't limited to clubs. Bars and pubs, particularly in neighborhoods like Prenzlauer Berg, offer a cozy atmosphere and a variety of craft beers and cocktails.
        
        Berlin's green side should not be overlooked. The Tiergarten, a vast park in the heart of the city, invites leisurely strolls. Volkspark Friedrichshain not only provides green oases but also historical landmarks like the Märchenbrunnen.
        
        The fusion of history, culture, and modernity makes Berlin a unique destination. Whether wandering through its historic streets, exploring contemporary art galleries, or experiencing its exciting nightlife, Berlin leaves a lasting impression. This city is a tribute to the past, a masterpiece of the present, and an inspiration for the future.
        ${(
          <>
            <div>&nbsp;</div>

            <br />
          </>
        )}

        7 Facts About Berlin Airport:
        
        1. Berlin Brandenburg Airport (BER): Berlin Brandenburg Airport, also known as BER, is the main international airport in Berlin and the city's only major airport. It opened on October 31, 2020, after years of delays and planning changes.
        
        2. Unified Location: BER replaces the two older Berlin airports, Tegel Airport (TXL) and Schönefeld Airport (SXF). Consolidating to one location was expected to increase efficiency and better coordinate air traffic in the region.
        
        3. Capacity Expansion: With the opening of BER, airport capacity has significantly expanded. The planned capacity is around 40 million passengers per year, with the potential to expand this capacity as needed.
        
        4. Logistics Hub: BER serves as a vital hub for domestic and international flight connections. Its central location in Europe makes it a significant logistics hub, providing efficient connections to various destinations worldwide.
        
        5. Environmentally Friendly Infrastructure: Berlin Brandenburg Airport prioritizes sustainability and environmental friendliness. Terminals are equipped with state-of-the-art technology for energy efficiency, and there are plans to expand eco-friendly transportation and renewable energy sources.
        
        6. Public Transport Connectivity: The airport is well-connected to public transportation networks. Direct links to Berlin Hauptbahnhof (main train station) and various S-Bahn and regional train lines facilitate passengers' arrival and departure.
        
        7. Technical Challenges: The opening of BER was accompanied by numerous technical challenges and delays. Issues ranged from fire safety problems to deficiencies in construction planning to organizational difficulties. The lengthy construction period and delayed opening led to significant cost increases and criticism of the project implementation.
        `,
      berlinDescription: `Berlin, the bustling capital of Germany, is a city that encapsulates history, culture, and modern innovations in a fascinating blend. A stroll through this vibrant metropolis is like a journey through time, from historical monuments to the trendy neighbourhoods of today. <br/><br/>

  The rich history of Berlin is palpable at every corner. The Brandenburg Gate, a symbol of German unity, stands majestically, reminding us of the turbulent events of the 20th century. Nearby, the Berlin Reichstag, with its glass dome, not only showcases architectural brilliance but also offers breathtaking views of the city.<br/><br/>
  
  Another historical site worth visiting is the East Side Gallery. This preserved section of the Berlin Wall is not only a symbol of overcoming Germany's division but also a canvas for artistic expressions and political messages. <br/> <br/>
  
  Berlin's cultural scene is as diverse as its history. The Museum Island, a UNESCO World Heritage site, hosts an impressive collection of museums, including the Pergamon Museum and the Neues Museum. Art enthusiasts will find delight in the Kulturforum, home to the Gemäldegalerie and the Neue Nationalgalerie. <br/> <br/>
  
  However, Berlin is not just about its historical sites. The city pulses with creativity and innovation, especially in neighborhoods like Kreuzberg and Friedrichshain. Here, street art adorns every corner, trendy cafes abound, and alternative boutiques thrive. The Mauerpark flea market is a hotspot for vintage lovers, while Görlitzer Park offers a relaxed atmosphere to sample local delights.<br/> <br/>
  
  Berlin's nightlife is legendary. The city is home to some of the best clubs in the world, including Berghain, renowned for its electronic music scene and strict door policy. But nightlife isn't limited to clubs. Bars and pubs, particularly in neighborhoods like Prenzlauer Berg, offer a cozy atmosphere and a variety of craft beers and cocktails.<br/> <br/>
  
  Berlin's green side should not be overlooked. The Tiergarten, a vast park in the heart of the city, invites leisurely strolls. Volkspark Friedrichshain not only provides green oases but also historical landmarks like the Märchenbrunnen. <br/> <br/>
  
  The fusion of history, culture, and modernity makes Berlin a unique destination. Whether wandering through its historic streets, exploring contemporary art galleries, or experiencing its exciting nightlife, Berlin leaves a lasting impression. This city is a tribute to the past, a masterpiece of the present, and an inspiration for the future.`,
      berlinAirportFacts: `<ul class=style.Ul> 7 Facts About Berlin Airport:
  <li>
  <span>1.</span> <span>Berlin Brandenburg Airport (BER):</span> Berlin Brandenburg Airport, also known as BER, is the main international airport in Berlin and the city's only major airport. It opened on October 31, 2020, after years of delays and planning changes.
</li>
<li>
  <span>2.</span> Unified Location: BER replaces the two older Berlin airports, Tegel Airport (TXL) and Schönefeld Airport (SXF). Consolidating to one location was expected to increase efficiency and better coordinate air traffic in the region.
</li>
<li>
  <span>3.</span> Capacity Expansion: With the opening of BER, airport capacity has significantly expanded. The planned capacity is around 40 million passengers per year, with the potential to expand this capacity as needed.
</li>
<li>
  <span>4.</span> Logistics Hub: BER serves as a vital hub for domestic and international flight connections. Its central location in Europe makes it a significant logistics hub, providing efficient connections to various destinations worldwide.
</li>
<li>
  <span>5.</span> Environmentally Friendly Infrastructure: Berlin Brandenburg Airport prioritizes sustainability and environmental friendliness. Terminals are equipped with state-of-the-art technology for energy efficiency, and there are plans to expand eco-friendly transportation and renewable energy sources.
</li>
<li>
  <span>6.</span> Public Transport Connectivity: The airport is well-connected to public transportation networks. Direct links to Berlin Hauptbahnhof (main train station) and various S-Bahn and regional train lines facilitate passengers' arrival and departure.
</li>
<li>
  <span>7.</span> Technical Challenges: The opening of BER was accompanied by numerous technical challenges and delays. Issues ranged from fire safety problems to deficiencies in construction planning to organizational difficulties. The lengthy construction period and delayed opening led to significant cost increases and criticism of the project implementation.
</li>`,

      name: "Sourav Colies",
      Date: "25 April 2023",
    },
    {
      id: 5,
      Image:
        "https://cdn.pixabay.com/photo/2012/07/01/08/35/architecture-51058_1280.jpg",
      Heading: "A Look at Berlin: History, Culture, and Modernity",

      berlinDescription: `Berlin, the bustling capital of Germany, is a city that encapsulates history, culture, and modern innovations in a fascinating blend. A stroll through this vibrant metropolis is like a journey through time, from historical monuments to the trendy neighbourhoods of today. <br/><br/>

  The rich history of Berlin is palpable at every corner. The Brandenburg Gate, a symbol of German unity, stands majestically, reminding us of the turbulent events of the 20th century. Nearby, the Berlin Reichstag, with its glass dome, not only showcases architectural brilliance but also offers breathtaking views of the city.<br/><br/>
  
  Another historical site worth visiting is the East Side Gallery. This preserved section of the Berlin Wall is not only a symbol of overcoming Germany's division but also a canvas for artistic expressions and political messages. <br/> <br/>
  
  Berlin's cultural scene is as diverse as its history. The Museum Island, a UNESCO World Heritage site, hosts an impressive collection of museums, including the Pergamon Museum and the Neues Museum. Art enthusiasts will find delight in the Kulturforum, home to the Gemäldegalerie and the Neue Nationalgalerie. <br/> <br/>
  
  However, Berlin is not just about its historical sites. The city pulses with creativity and innovation, especially in neighborhoods like Kreuzberg and Friedrichshain. Here, street art adorns every corner, trendy cafes abound, and alternative boutiques thrive. The Mauerpark flea market is a hotspot for vintage lovers, while Görlitzer Park offers a relaxed atmosphere to sample local delights.<br/> <br/>
  
  Berlin's nightlife is legendary. The city is home to some of the best clubs in the world, including Berghain, renowned for its electronic music scene and strict door policy. But nightlife isn't limited to clubs. Bars and pubs, particularly in neighborhoods like Prenzlauer Berg, offer a cozy atmosphere and a variety of craft beers and cocktails.<br/> <br/>
  
  Berlin's green side should not be overlooked. The Tiergarten, a vast park in the heart of the city, invites leisurely strolls. Volkspark Friedrichshain not only provides green oases but also historical landmarks like the Märchenbrunnen. <br/> <br/>
  
  The fusion of history, culture, and modernity makes Berlin a unique destination. Whether wandering through its historic streets, exploring contemporary art galleries, or experiencing its exciting nightlife, Berlin leaves a lasting impression. This city is a tribute to the past, a masterpiece of the present, and an inspiration for the future.`,
      berlinAirportFacts: `<ul class=style.Ul> 7 Facts About Berlin Airport:
  <li>
  <span>1.</span> <span>Berlin Brandenburg Airport (BER):</span> Berlin Brandenburg Airport, also known as BER, is the main international airport in Berlin and the city's only major airport. It opened on October 31, 2020, after years of delays and planning changes.
</li>
<li>
  <span>2.</span> Unified Location: BER replaces the two older Berlin airports, Tegel Airport (TXL) and Schönefeld Airport (SXF). Consolidating to one location was expected to increase efficiency and better coordinate air traffic in the region.
</li>
<li>
  <span>3.</span> Capacity Expansion: With the opening of BER, airport capacity has significantly expanded. The planned capacity is around 40 million passengers per year, with the potential to expand this capacity as needed.
</li>
<li>
  <span>4.</span> Logistics Hub: BER serves as a vital hub for domestic and international flight connections. Its central location in Europe makes it a significant logistics hub, providing efficient connections to various destinations worldwide.
</li>
<li>
  <span>5.</span> Environmentally Friendly Infrastructure: Berlin Brandenburg Airport prioritizes sustainability and environmental friendliness. Terminals are equipped with state-of-the-art technology for energy efficiency, and there are plans to expand eco-friendly transportation and renewable energy sources.
</li>
<li>
  <span>6.</span> Public Transport Connectivity: The airport is well-connected to public transportation networks. Direct links to Berlin Hauptbahnhof (main train station) and various S-Bahn and regional train lines facilitate passengers' arrival and departure.
</li>
<li>
  <span>7.</span> Technical Challenges: The opening of BER was accompanied by numerous technical challenges and delays. Issues ranged from fire safety problems to deficiencies in construction planning to organizational difficulties. The lengthy construction period and delayed opening led to significant cost increases and criticism of the project implementation.
</li>`,

      name: "Sourav Colies",
      Date: "25 April 2023",
    },
    {
      id: 6,
      cityname: "Bremen",
      Image:
        "https://cdn.pixabay.com/photo/2012/07/01/08/35/architecture-51058_1280.jpg",
      Heading: "Bremen - Hanseatic City with History, Charm, and Culture",

      berlinDescription: `Bremen, one of Germany's oldest cities, charmingly combines history, maritime atmosphere, and a rich cultural scene. As a Hanseatic city and home to the famous Bremen Town Musicians, Bremen captivates visitors with a mix of tradition and modernity.<br/> <br/>

      The historic old town of Bremen is characterized by picturesque alleys, scenic squares, and impressive historical buildings. The Market Square with its magnificent Town Hall, a UNESCO World Heritage site, forms the heart of the old town. The Bremen Roland, a statue from the 15th century, stands guard as a symbol of freedom and trade privileges over the market square.
      
      A stroll through the Schnoor district transports visitors back to the Hanseatic era. The narrow streets with lovingly restored half-timbered houses exude an authentic flair. Small boutiques, galleries, and cozy cafes invite you to linger.
      
      Bremen's landmark, the Bremen Town Musicians, has its place not far from the Town Hall. The bronze statue, depicting the donkey, dog, cat, and rooster stacked on top of each other, recalls the famous fairy tale by the Brothers Grimm.
      
      The Überseestadt Bremen, a modern urban development area on the Weser River, reflects the city's structural transformation. Here, historical port settings blend with contemporary architecture. The Havenwelten, part of the Überseestadt, host the Klimahaus Bremerhaven 8° Ost, a fascinating experience center that makes the Earth's climate zones tangible.
      
      The Weser promenade Schlachte is a lively meeting point with restaurants, bars, and a maritime atmosphere. While strolling along the riverbank, you can watch the passing ships or enjoy North German cuisine in one of the cozy establishments.
      
      Bremen has much to offer culturally. The Kunsthalle Bremen houses an impressive collection of European art from the Middle Ages to the present day. Universum® Bremen, an interactive science center, invites visitors of all ages to exciting discoveries in the fields of natural science and technology.
      
      Bremen is also known for its diverse event offerings. The Freimarkt, Germany's oldest fair, attracts visitors every October with rides, culinary delights, and colorful festivities. Bremen's music scene thrives in clubs like Tower Musikclub or Lagerhaus, presenting a wide range of live music genres.
      
      Bremen's local cuisine is characterized by North German specialties. Labskaus, a traditional sailor's dish, and the famous Bremer Ratskeller invite you to discover the culinary delights of the city.
      
      With its rich cultural heritage and cosmopolitan atmosphere, Bremen offers visitors an unparalleled experience. Whether strolling through the historic old town, exploring modern neighborhoods, or indulging in maritime delicacies, Bremen captivates with diversity and Hanseatic charm.
      `,
      berlinAirportFacts: `<ul class=style.Ul> 7 Facts About Berlin Airport:
  <li>
  <span>1.</span> <span>Berlin Brandenburg Airport (BER):</span> Berlin Brandenburg Airport, also known as BER, is the main international airport in Berlin and the city's only major airport. It opened on October 31, 2020, after years of delays and planning changes.
</li>
<li>
  <span>2.</span> Unified Location: BER replaces the two older Berlin airports, Tegel Airport (TXL) and Schönefeld Airport (SXF). Consolidating to one location was expected to increase efficiency and better coordinate air traffic in the region.
</li>
<li>
  <span>3.</span> Capacity Expansion: With the opening of BER, airport capacity has significantly expanded. The planned capacity is around 40 million passengers per year, with the potential to expand this capacity as needed.
</li>
<li>
  <span>4.</span> Logistics Hub: BER serves as a vital hub for domestic and international flight connections. Its central location in Europe makes it a significant logistics hub, providing efficient connections to various destinations worldwide.
</li>
<li>
  <span>5.</span> Environmentally Friendly Infrastructure: Berlin Brandenburg Airport prioritizes sustainability and environmental friendliness. Terminals are equipped with state-of-the-art technology for energy efficiency, and there are plans to expand eco-friendly transportation and renewable energy sources.
</li>
<li>
  <span>6.</span> Public Transport Connectivity: The airport is well-connected to public transportation networks. Direct links to Berlin Hauptbahnhof (main train station) and various S-Bahn and regional train lines facilitate passengers' arrival and departure.
</li>
<li>
  <span>7.</span> Technical Challenges: The opening of BER was accompanied by numerous technical challenges and delays. Issues ranged from fire safety problems to deficiencies in construction planning to organizational difficulties. The lengthy construction period and delayed opening led to significant cost increases and criticism of the project implementation.
</li>`,

      name: "Sourav Colies",
      Date: "25 April 2023",
    },
  ];

  function fetchBlogById(id) {
    // console.log(BlogData.find((blog) => blog.id == id));
    return BlogData.find((blog) => blog.id == id);
  }

  // Example usage
  const { id } = useParams(); // This can be dynamic
  let blog;
  useEffect(() => {
    blog = fetchBlogById(id);
    setBlog(blog);
  }, []);

  const berlinDescription = `Berlin, the bustling capital of Germany, is a city that encapsulates history, culture, and modern innovations in a fascinating blend. A stroll through this vibrant metropolis is like a journey through time, from historical monuments to the trendy neighbourhoods of today. <br/><br/>

  The rich history of Berlin is palpable at every corner. The Brandenburg Gate, a symbol of German unity, stands majestically, reminding us of the turbulent events of the 20th century. Nearby, the Berlin Reichstag, with its glass dome, not only showcases architectural brilliance but also offers breathtaking views of the city.<br/><br/>
  
  Another historical site worth visiting is the East Side Gallery. This preserved section of the Berlin Wall is not only a symbol of overcoming Germany's division but also a canvas for artistic expressions and political messages. <br/> <br/>
  
  Berlin's cultural scene is as diverse as its history. The Museum Island, a UNESCO World Heritage site, hosts an impressive collection of museums, including the Pergamon Museum and the Neues Museum. Art enthusiasts will find delight in the Kulturforum, home to the Gemäldegalerie and the Neue Nationalgalerie. <br/> <br/>
  
  However, Berlin is not just about its historical sites. The city pulses with creativity and innovation, especially in neighborhoods like Kreuzberg and Friedrichshain. Here, street art adorns every corner, trendy cafes abound, and alternative boutiques thrive. The Mauerpark flea market is a hotspot for vintage lovers, while Görlitzer Park offers a relaxed atmosphere to sample local delights.<br/> <br/>
  
  Berlin's nightlife is legendary. The city is home to some of the best clubs in the world, including Berghain, renowned for its electronic music scene and strict door policy. But nightlife isn't limited to clubs. Bars and pubs, particularly in neighborhoods like Prenzlauer Berg, offer a cozy atmosphere and a variety of craft beers and cocktails.<br/> <br/>
  
  Berlin's green side should not be overlooked. The Tiergarten, a vast park in the heart of the city, invites leisurely strolls. Volkspark Friedrichshain not only provides green oases but also historical landmarks like the Märchenbrunnen. <br/> <br/>
  
  The fusion of history, culture, and modernity makes Berlin a unique destination. Whether wandering through its historic streets, exploring contemporary art galleries, or experiencing its exciting nightlife, Berlin leaves a lasting impression. This city is a tribute to the past, a masterpiece of the present, and an inspiration for the future.`;

  const berlinAirportFacts = `<ul class=style.Ul> 7 Facts About Berlin Airport:
  <li>
  <span>1.</span> <span>Berlin Brandenburg Airport (BER):</span> Berlin Brandenburg Airport, also known as BER, is the main international airport in Berlin and the city's only major airport. It opened on October 31, 2020, after years of delays and planning changes.
</li>
<li>
  <span>2.</span> Unified Location: BER replaces the two older Berlin airports, Tegel Airport (TXL) and Schönefeld Airport (SXF). Consolidating to one location was expected to increase efficiency and better coordinate air traffic in the region.
</li>
<li>
  <span>3.</span> Capacity Expansion: With the opening of BER, airport capacity has significantly expanded. The planned capacity is around 40 million passengers per year, with the potential to expand this capacity as needed.
</li>
<li>
  <span>4.</span> Logistics Hub: BER serves as a vital hub for domestic and international flight connections. Its central location in Europe makes it a significant logistics hub, providing efficient connections to various destinations worldwide.
</li>
<li>
  <span>5.</span> Environmentally Friendly Infrastructure: Berlin Brandenburg Airport prioritizes sustainability and environmental friendliness. Terminals are equipped with state-of-the-art technology for energy efficiency, and there are plans to expand eco-friendly transportation and renewable energy sources.
</li>
<li>
  <span>6.</span> Public Transport Connectivity: The airport is well-connected to public transportation networks. Direct links to Berlin Hauptbahnhof (main train station) and various S-Bahn and regional train lines facilitate passengers' arrival and departure.
</li>
<li>
  <span>7.</span> Technical Challenges: The opening of BER was accompanied by numerous technical challenges and delays. Issues ranged from fire safety problems to deficiencies in construction planning to organizational difficulties. The lengthy construction period and delayed opening led to significant cost increases and criticism of the project implementation.
</li>`;

  return (
    <Container>
      <Row style={{ padding: "120px 80px", justifyContent: "space-evenly" }}>
        <Col lg={7}>
          <>
            <div className={style.BlogsMainContainer}>
              <img src={blogs?.Image} alt="" />

              <div className={style.BlogText}>
                <div className={style.BlogHeading}>
                  <div className={style.BlogDetails}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <div className={style.BlogDetailsSolo}>
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="8.00016"
                            cy="4.49992"
                            r="2.66667"
                            stroke="#0BC36B"
                          />
                          <path
                            d="M13.3332 12.1667C13.3332 13.8236 13.3332 15.1667 7.99984 15.1667C2.6665 15.1667 2.6665 13.8236 2.6665 12.1667C2.6665 10.5099 5.05432 9.16675 7.99984 9.16675C10.9454 9.16675 13.3332 10.5099 13.3332 12.1667Z"
                            stroke="#0BC36B"
                          />
                        </svg>
                        <p>{blogs?.name}</p>
                      </div>

                      <div className={style.BlogDetailsSolo}>
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.3335 8.50008C1.3335 5.98592 1.3335 4.72885 2.11454 3.9478C2.89559 3.16675 4.15267 3.16675 6.66683 3.16675H9.3335C11.8477 3.16675 13.1047 3.16675 13.8858 3.9478C14.6668 4.72885 14.6668 5.98592 14.6668 8.50008V9.83341C14.6668 12.3476 14.6668 13.6047 13.8858 14.3857C13.1047 15.1667 11.8477 15.1667 9.3335 15.1667H6.66683C4.15267 15.1667 2.89559 15.1667 2.11454 14.3857C1.3335 13.6047 1.3335 12.3476 1.3335 9.83341V8.50008Z"
                            stroke="#0BC36B"
                          />
                          <path
                            d="M4.6665 3.16675V2.16675"
                            stroke="#0BC36B"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11.3335 3.16675V2.16675"
                            stroke="#0BC36B"
                            stroke-linecap="round"
                          />
                          <path
                            d="M1.6665 6.5H14.3332"
                            stroke="#0BC36B"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11.9998 11.8333C11.9998 12.2015 11.7014 12.5 11.3332 12.5C10.965 12.5 10.6665 12.2015 10.6665 11.8333C10.6665 11.4651 10.965 11.1667 11.3332 11.1667C11.7014 11.1667 11.9998 11.4651 11.9998 11.8333Z"
                            fill="#0BC36B"
                          />
                          <path
                            d="M11.9998 9.16667C11.9998 9.53486 11.7014 9.83333 11.3332 9.83333C10.965 9.83333 10.6665 9.53486 10.6665 9.16667C10.6665 8.79848 10.965 8.5 11.3332 8.5C11.7014 8.5 11.9998 8.79848 11.9998 9.16667Z"
                            fill="#0BC36B"
                          />
                          <path
                            d="M8.66683 11.8333C8.66683 12.2015 8.36835 12.5 8.00016 12.5C7.63197 12.5 7.3335 12.2015 7.3335 11.8333C7.3335 11.4651 7.63197 11.1667 8.00016 11.1667C8.36835 11.1667 8.66683 11.4651 8.66683 11.8333Z"
                            fill="#0BC36B"
                          />
                          <path
                            d="M8.66683 9.16667C8.66683 9.53486 8.36835 9.83333 8.00016 9.83333C7.63197 9.83333 7.3335 9.53486 7.3335 9.16667C7.3335 8.79848 7.63197 8.5 8.00016 8.5C8.36835 8.5 8.66683 8.79848 8.66683 9.16667Z"
                            fill="#0BC36B"
                          />
                          <path
                            d="M5.33333 11.8333C5.33333 12.2015 5.03486 12.5 4.66667 12.5C4.29848 12.5 4 12.2015 4 11.8333C4 11.4651 4.29848 11.1667 4.66667 11.1667C5.03486 11.1667 5.33333 11.4651 5.33333 11.8333Z"
                            fill="#0BC36B"
                          />
                          <path
                            d="M5.33333 9.16667C5.33333 9.53486 5.03486 9.83333 4.66667 9.83333C4.29848 9.83333 4 9.53486 4 9.16667C4 8.79848 4.29848 8.5 4.66667 8.5C5.03486 8.5 5.33333 8.79848 5.33333 9.16667Z"
                            fill="#0BC36B"
                          />
                        </svg>
                        <p>{blogs?.Date}</p>
                      </div>
                    </div>

                    <div className={style.BlogDetailsSolo}>
                      <svg
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.7246 14.7584L9.15487 15.0131L8.7246 14.7584ZM9.086 14.1478L8.65572 13.8931L9.086 14.1478ZM6.9143 14.1478L6.48402 14.4025V14.4025L6.9143 14.1478ZM7.2757 14.7584L7.70598 14.5037V14.5037L7.2757 14.7584ZM1.58723 11.1089L2.04917 10.9175H2.04917L1.58723 11.1089ZM5.19321 13.1609L5.1846 13.6608L5.19321 13.1609ZM3.39122 12.9128L3.19988 13.3748L3.19988 13.3748L3.39122 12.9128ZM14.4131 11.1089L14.875 11.3002V11.3002L14.4131 11.1089ZM10.8071 13.1609L10.7985 12.661L10.8071 13.1609ZM12.6091 12.9128L12.8004 13.3748V13.3748L12.6091 12.9128ZM13.0752 2.32445L12.8139 2.75077L13.0752 2.32445ZM14.1756 3.42492L14.6019 3.16367L14.6019 3.16367L14.1756 3.42492ZM2.92517 2.32445L2.66392 1.89813V1.89813L2.92517 2.32445ZM1.8247 3.42492L1.39838 3.16367H1.39838L1.8247 3.42492ZM6.26869 13.3065L6.52007 12.8743L6.52007 12.8743L6.26869 13.3065ZM9.15487 15.0131L9.51627 14.4025L8.65572 13.8931L8.29432 14.5037L9.15487 15.0131ZM6.48402 14.4025L6.84542 15.0131L7.70598 14.5037L7.34458 13.8931L6.48402 14.4025ZM8.29432 14.5037C8.16582 14.7208 7.83448 14.7208 7.70598 14.5037L6.84542 15.0131C7.36114 15.8843 8.63916 15.8843 9.15487 15.0131L8.29432 14.5037ZM7.00016 2.33325H9.00016V1.33325H7.00016V2.33325ZM14.1668 7.49992V8.16658H15.1668V7.49992H14.1668ZM1.8335 8.16658V7.49992H0.833496V8.16658H1.8335ZM0.833496 8.16658C0.833496 8.93631 0.833225 9.53865 0.866373 10.0245C0.899827 10.5148 0.968982 10.9228 1.12529 11.3002L2.04917 10.9175C1.95175 10.6823 1.89403 10.3958 1.86405 9.9564C1.83377 9.51251 1.8335 8.94999 1.8335 8.16658H0.833496ZM5.20183 12.661C4.36487 12.6465 3.92632 12.5933 3.58256 12.4509L3.19988 13.3748C3.73653 13.5971 4.34775 13.6464 5.1846 13.6608L5.20183 12.661ZM1.12529 11.3002C1.51435 12.2395 2.2606 12.9857 3.19988 13.3748L3.58256 12.4509C2.88831 12.1633 2.33674 11.6118 2.04917 10.9175L1.12529 11.3002ZM14.1668 8.16658C14.1668 8.94999 14.1666 9.51251 14.1363 9.9564C14.1063 10.3958 14.0486 10.6823 13.9512 10.9175L14.875 11.3002C15.0313 10.9228 15.1005 10.5148 15.134 10.0245C15.1671 9.53865 15.1668 8.93631 15.1668 8.16658H14.1668ZM10.8157 13.6608C11.6526 13.6464 12.2638 13.5971 12.8004 13.3748L12.4178 12.4509C12.074 12.5933 11.6354 12.6465 10.7985 12.661L10.8157 13.6608ZM13.9512 10.9175C13.6636 11.6118 13.112 12.1633 12.4178 12.4509L12.8004 13.3748C13.7397 12.9857 14.486 12.2395 14.875 11.3002L13.9512 10.9175ZM9.00016 2.33325C10.101 2.33325 10.8915 2.33378 11.5081 2.39241C12.1173 2.45033 12.5049 2.56141 12.8139 2.75077L13.3364 1.89813C12.8439 1.5963 12.2851 1.46178 11.6028 1.3969C10.9278 1.33272 10.0816 1.33325 9.00016 1.33325V2.33325ZM15.1668 7.49992C15.1668 6.41846 15.1674 5.57225 15.1032 4.89732C15.0383 4.21496 14.9038 3.65622 14.6019 3.16367L13.7493 3.68617C13.9387 3.99519 14.0498 4.38281 14.1077 4.99198C14.1663 5.60858 14.1668 6.39909 14.1668 7.49992H15.1668ZM12.8139 2.75077C13.1951 2.9844 13.5157 3.30493 13.7493 3.68617L14.6019 3.16367C14.2859 2.64788 13.8522 2.21421 13.3364 1.89813L12.8139 2.75077ZM7.00016 1.33325C5.9187 1.33325 5.07249 1.33272 4.39757 1.3969C3.7152 1.46178 3.15647 1.5963 2.66392 1.89813L3.18642 2.75077C3.49543 2.56141 3.88305 2.45033 4.49222 2.39241C5.10883 2.33378 5.89934 2.33325 7.00016 2.33325V1.33325ZM1.8335 7.49992C1.8335 6.39909 1.83402 5.60858 1.89265 4.99198C1.95057 4.38281 2.06165 3.99519 2.25102 3.68617L1.39838 3.16367C1.09654 3.65622 0.962021 4.21496 0.897141 4.89732C0.832969 5.57225 0.833496 6.41846 0.833496 7.49992H1.8335ZM2.66392 1.89813C2.14812 2.21421 1.71446 2.64788 1.39838 3.16367L2.25102 3.68617C2.48464 3.30493 2.80518 2.9844 3.18642 2.75077L2.66392 1.89813ZM7.34458 13.8931C7.20922 13.6644 7.0904 13.4627 6.97487 13.3041C6.85318 13.1372 6.7136 12.9868 6.52007 12.8743L6.01731 13.7387C6.04891 13.7571 6.09198 13.7906 6.16673 13.8931C6.24764 14.0042 6.33906 14.1576 6.48402 14.4025L7.34458 13.8931ZM5.1846 13.6608C5.47733 13.6659 5.66274 13.6696 5.80408 13.6852C5.93615 13.6998 5.98735 13.7213 6.01731 13.7387L6.52007 12.8743C6.3249 12.7607 6.1218 12.7143 5.91414 12.6913C5.71575 12.6693 5.47599 12.6657 5.20183 12.661L5.1846 13.6608ZM9.51627 14.4025C9.66124 14.1576 9.75266 14.0042 9.83357 13.8931C9.90832 13.7906 9.95138 13.7571 9.98299 13.7387L9.48023 12.8743C9.2867 12.9868 9.14711 13.1372 9.02543 13.3041C8.90989 13.4627 8.79108 13.6644 8.65572 13.8931L9.51627 14.4025ZM10.7985 12.661C10.5243 12.6657 10.2845 12.6693 10.0862 12.6913C9.87849 12.7143 9.6754 12.7607 9.48023 12.8743L9.98299 13.7387C10.0129 13.7213 10.0641 13.6998 10.1962 13.6852C10.3376 13.6696 10.523 13.6659 10.8157 13.6608L10.7985 12.661Z"
                          fill="#0BC36B"
                        />
                      </svg>
                      <p>No Comments</p>
                    </div>
                  </div>
                  <h4>{blogs?.Heading}</h4>
                </div>

                <p
                  dangerouslySetInnerHTML={{ __html: blogs?.berlinDescription }}
                >
                  {/* {blogs?.Description} */}
                  {/* What's your favorite game? Nam a diam tincidunt, condimentum
                  nisi et, fringilla lectus. Nullam nec lectus eu erat temus
                  pulvinar. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  citation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  <br />
                  <div style={{ width: "100%" }}>&nbsp;</div>
                  What's your favorite game? Nam a diam tincidunt, condimentum
                  nisi et, fringilla lectus. Nullam nec lectus eu erat temus
                  pulvinar. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  citation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  <br />
                  <div style={{ width: "100%" }}>&nbsp;</div>
                  What's your favorite game? Nam a diam tincidunt, condimentum
                  nisi et, fringilla lectus. Nullam nec lectus eu erat temus
                  pulvinar. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  citation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  <br /> */}
                </p>
                <br />
                <br />
                <div
                  className={style.Ul}
                  style={{ padding: "0px" }}
                  dangerouslySetInnerHTML={{ __html: berlinAirportFacts }}
                />
              </div>

              <div className={style.aboutAdmin}>
                <img src={Blog4} alt="" />
                <div className={style.AdminName}>
                  <h3>About Admin : James Colies</h3>
                  <p>
                    Porttitor fringilla vestibulum. Phasellus curs our tinnt
                    nulla, ut ttis augue finibus ac Vivamus elementum enim ac
                    enim ces rhoncus.
                  </p>
                </div>
              </div>
            </div>
          </>
        </Col>

        <Col lg={4}>
          <div className={style.BlogInfo}>
            {/* recent posts */}
            <div className={style.RecentPost}>
              <h4>Recent Posts</h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "10px ",
                }}
              >
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>A Great Deal on your Van Rentals</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>We Assurance a Countless Experience</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>Returning your Vehicle Safely Guide</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>Paperless Rental Agreements Available</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>A Great Deal on your Van Rentals</p>
                </div>
              </div>
            </div>

            {/* Categories */}

            <div className={style.RecentPost}>
              <h4>Categories</h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingBottom: "10px ",
                }}
              >
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>Airport</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>Cars</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>Classic</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>Luxury</p>
                </div>

                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.80259 4.06128C8.09088 3.81417 8.5249 3.84756 8.772 4.13585L14.272 10.5525C14.4927 10.81 14.4927 11.1899 14.272 11.4474L8.772 17.864C8.5249 18.1523 8.09088 18.1857 7.80259 17.9386C7.51431 17.6915 7.48092 17.2575 7.72802 16.9692L12.8445 10.9999L7.72802 5.03068C7.48092 4.7424 7.51431 4.30838 7.80259 4.06128Z"
                      fill="#0BC36B"
                    />
                  </svg>

                  <p>Travel</p>
                </div>
              </div>
            </div>
            {/* Follow Us */}

            <div className={style.RecentPost}>
              <h4>Follow Us</h4>

              <div
                style={{
                  display: "flex",
                  //   flexDirection: "column",
                  gap: "10px",
                  paddingBottom: "10px ",
                }}
              >
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_663)">
                        <path
                          d="M12 0C5.37188 0 0 5.37188 0 12C0 17.0859 3.16406 21.4266 7.62656 23.175C7.52344 22.2234 7.425 20.7703 7.66875 19.7344C7.88906 18.7969 9.075 13.7719 9.075 13.7719C9.075 13.7719 8.71406 13.0547 8.71406 11.9906C8.71406 10.3219 9.67969 9.075 10.8844 9.075C11.9062 9.075 12.4031 9.84375 12.4031 10.7672C12.4031 11.7984 11.7469 13.3359 11.4094 14.7609C11.1281 15.9562 12.0094 16.9313 13.1859 16.9313C15.3187 16.9313 16.9594 14.6812 16.9594 11.4375C16.9594 8.56406 14.8969 6.55313 11.9484 6.55313C8.53594 6.55313 6.52969 9.1125 6.52969 11.7609C6.52969 12.7922 6.92812 13.8984 7.425 14.4984C7.52344 14.6156 7.5375 14.7234 7.50937 14.8406C7.42031 15.2203 7.21406 16.0359 7.17656 16.2C7.125 16.4203 7.00313 16.4672 6.77344 16.3594C5.27344 15.6609 4.33594 13.4719 4.33594 11.7094C4.33594 7.92188 7.0875 4.44844 12.2625 4.44844C16.425 4.44844 19.6594 7.41563 19.6594 11.3813C19.6594 15.5156 17.0531 18.8438 13.4344 18.8438C12.2203 18.8438 11.0766 18.2109 10.6828 17.4656C10.6828 17.4656 10.0828 19.7578 9.9375 20.3203C9.66562 21.3609 8.93437 22.6688 8.44687 23.4656C9.57187 23.8125 10.7625 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_663">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>
                {/* socail 2 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_664)">
                        <path
                          d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_664">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>
                {/* socail 3 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_665)">
                        <path
                          d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0187 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85937 20.0344 3.12187 20.4516 3.53906C20.8734 3.96094 21.1313 4.35937 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96562 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65312 19.0641C2.48906 18.6422 2.29219 18.0047 2.24062 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78437 2.18438 8.40469 2.24062 7.14375C2.29219 5.97187 2.48906 5.33906 2.65312 4.91719C2.86875 4.35937 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85937 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126562 4.90312 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01562 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90312 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8562C0.9375 20.6484 1.34531 21.3187 2.01562 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3187 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74687 23.9719 8.33906 23.9156 7.05937C23.8594 5.78437 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z"
                          fill="white"
                        />
                        <path
                          d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z"
                          fill="white"
                        />
                        <path
                          d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_665">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>{" "}
                {/* socail 4 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_666)">
                        <path
                          d="M7.55016 21.75C16.6045 21.75 21.5583 14.2467 21.5583 7.74186C21.5583 7.53092 21.5536 7.3153 21.5442 7.10436C22.5079 6.40746 23.3395 5.54425 24 4.5553C23.1025 4.9546 22.1496 5.21538 21.1739 5.32874C22.2013 4.71291 22.9705 3.74547 23.3391 2.60577C22.3726 3.17856 21.3156 3.58261 20.2134 3.80061C19.4708 3.01156 18.489 2.48912 17.4197 2.31405C16.3504 2.13899 15.2532 2.32105 14.2977 2.8321C13.3423 3.34314 12.5818 4.15471 12.1338 5.14131C11.6859 6.12792 11.5754 7.23461 11.8195 8.2903C9.86249 8.19209 7.94794 7.6837 6.19998 6.7981C4.45203 5.91249 2.90969 4.66944 1.67297 3.14952C1.0444 4.23324 0.852057 5.51564 1.13503 6.73609C1.418 7.95654 2.15506 9.02345 3.19641 9.71998C2.41463 9.69516 1.64998 9.48468 0.965625 9.10592V9.16686C0.964925 10.3041 1.3581 11.4066 2.07831 12.2868C2.79852 13.167 3.80132 13.7706 4.91625 13.995C4.19206 14.1931 3.43198 14.222 2.69484 14.0794C3.00945 15.0574 3.62157 15.9129 4.44577 16.5263C5.26997 17.1398 6.26512 17.4806 7.29234 17.5012C5.54842 18.8711 3.39417 19.6141 1.17656 19.6106C0.783287 19.61 0.390399 19.5859 0 19.5384C2.25286 20.9837 4.87353 21.7514 7.55016 21.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_666">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>{" "}
                {/* socail 5 */}
                <span>
                  {
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_530_667)">
                        <path
                          d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_530_667">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                </span>
              </div>
            </div>

            {/* Follow Us */}

            <div className={style.HelpCenter}>
              <h4>Help Center</h4>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <h6>+91 1234567890</h6>

              <span>support@xactlane.com</span>

              <button>Support Center</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogSummery;
