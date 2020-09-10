import React from "react";
import "./Home.css";
import Product from "./Product";
import FlipMove from "react-flip-move";

const Home = () => {
  const rowOne = [
    {
      id: "234213",
      title: "The lean startup",
      price: "29.99",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._AC_SY400_.jpg",
      rating: "5",
    },
    {
      id: "23421354653",
      title: "Samsung LC345234xEN Curved LED Gaming Monitor",
      price: "199.99",
      image:
        "https://images.samsung.com/is/image/samsung/ca-uhdtv-nu7400-un55nu7400fxzc-frontblackmist-106394490?$PD_GALLERY_L_JPG$",
      rating: "3",
    },
    {
      id: "234234534213",
      title: "Amazon Echo 3rd Generation | Smart speaker",
      price: "98.99",
      image:
        "https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_gris_claro_altavoz_inteligente_alexa_01_l.jpg",

      rating: "5",
    },
  ];
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/All_Or_Nothing_Tottenham_Hotspur_S1/AONT_S1_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB406302419_.jpg'
          alt=''
        />
        <FlipMove>
          <div className='home__row'>
            {rowOne.map((item) => (
              <Product
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        </FlipMove>
        <div className='home__row'>
          <Product
            id='23421p9873'
            title='Samsung super watch , which is very cool to wear in the summer'
            price={245.99}
            image='https://elandroidelibre.elespanol.com/wp-content/uploads/2020/06/Samsung-Galaxy-Watch-3-cabecera.jpg'
            rating={4}
          />
          <Product
            id='234213000'
            title='New Apple iPad Pro - Silver (4th Generation)'
            price={598.99}
            image={
              "https://csmobiles.com/10314-large_default/apple-ipad-air-3-10-5-2019-64gb-wifi-oro.jpg"
            }
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='567'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-betaer, Dough Hook and Whisk'
            price={239.0}
            image={
              "https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kitchen%20Machines/Patissier/MX271/Patissier-MX271-800x600-1_800x600.jpg"
            }
            rating={4}
          />
          <Product
            id='23421p9873'
            title='Samsung super watch , which is very cool to wear in the summer'
            price={245.99}
            image='https://elandroidelibre.elespanol.com/wp-content/uploads/2020/06/Samsung-Galaxy-Watch-3-cabecera.jpg'
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
