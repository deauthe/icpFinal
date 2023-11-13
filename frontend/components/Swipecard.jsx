import React from "react";
import styles from "../style";
import "./CardComps/Swiper.css";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import Item from "../components/Item"

const Swipecard = (props) => {
  const [items,setItems]=useState();
  
  function fetchMemes(){
    if(props.ids != undefined){
      setItems(
        props.ids.map(
          (memeId)=>(<Item id={memeId} key={memeId.toText()} role={props.role}/>)
        )
      );
    }
  }
  // only 1 time on page load
  useEffect(()=>{
      fetchMemes();
  },[]);




  return (
    <section className="w-full min-h-[500px] flex flex-col justify-center items-center">
      <div className="w-[80%] mt-10 mb-6 shadowBox border-[1px] flex flex-col md:flex-row justify-evenly items-center py-6 px-6 rounded-[20px]">
        <div className="flex flex-col justify-between min-h-[250px] items-start w-[100%] md:w-[55%] h-full mb-[40px] md:mb-[0px]">
          <h1 className="text-gradient text-[51px] font-Rose leading-[60px]">
            Start Selling now!
          </h1>
          <p className="text-gray-300 text-[20px]">
            Once you've set up wallet of your choice, connect it to OpenSea by
            clicking the wallet icon in the top right corner. Learn about
            wallets we support.
          </p>
          <button className="rounded-[27px] hover:bg-black border-white border-[1px] mt-4 text-white text-[23px] xs:text-[25px] font-[900] bg-purple-700 py-2 px-6">
            Enter Marketplace
          </button>
        </div>
        <div className="">
          {" "}
          <Swiper
            effect={"cards"}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            grabCursor={true}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
            
            {items !=undefined && 
            items.map((item) => (
              <SwiperSlide>
                {item}
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Swipecard;
