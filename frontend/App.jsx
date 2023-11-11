import React from "react";
import styles from "./style";
import { useRef, useState, useEffect } from "react";
import { Navbar, Page, Logos, Footer, Cards, Swipecard } from "./components";
import Minter from "./components/Minter";
import { memera } from "../src/declarations/memera";

const App = () => {
  const [userOwnedGallery, setUserOwnedGallery]=useState();
  const [listedGallery,setListedGallery]=useState();
  async function getMemes(){
    const userMemeIds=await memera.getOwnedMemes(CURRENT_USER_ID);
    setUserOwnedGallery(<Swipecard title="My Collection" ids={userMemeIds} role="collection"/>)

    const allMemes= await memera.getExistingMemes();
    console.log(allMemes);
    setListedGallery(<Swipecard title="Discover" ids={allMemes} role="discover"/>)
  }

  useEffect(()=>{
  getMemes();
  },[]);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Page />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Logos />
          <Cards />
          <Swipecard />
          <Minter/>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
