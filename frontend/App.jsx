import React from "react";
import styles from "./style";
import { Navbar, Page, Logos, Footer, Cards, Swipecard } from "./components";
import { memera } from "../src/declarations/memera";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import CURRENT_USER_ID from "./index";
import Button from "./components/Button";
const App = () => {
  const [userOwnedGallery, setUserOwnedGallery]=useState();
  const [listedGallery,setListedGallery]=useState();
  async function getMemes() {
    try {
      const myId = await memera.getYourId();
      console.log(`my ID !!!! ${myId}`)
      const userMemeIds = await memera.getOwnedMemes(CURRENT_USER_ID);
      console.log(`owned memes : ${userMemeIds}`)
      setUserOwnedGallery(<Gallery title="My Collection" ids={userMemeIds} role="collection" />);
  
      const allMemes = await memera.getExistingMemes();
      console.log(`all memes : ${allMemes}`)
      console.log(`user id !!!!!!:${CURRENT_USER_ID}`);
      setListedGallery(<Gallery title="Discover" ids={allMemes} role="discover" />);
      return "success"
    } catch (error) {
      console.error("Error fetching memes:", error);
    }
  }
  

  useEffect(()=>{
    getMemes()
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
          <Button text="getMemes" handleClick={getMemes}/>
          {listedGallery}
          {userOwnedGallery}
          {/* <Swipecard/> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
