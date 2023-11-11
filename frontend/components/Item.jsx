import React, { useEffect, useState } from "react";
import {HttpAgent, Actor} from "@dfinity/agent";
import {idlFactory} from "../../src/declarations/meme";
import Button from "./Button";
import CURRENT_USER_ID from "../index";

function Item(props) {
  const id=props.id;
  const localhost="http://localhost:4943/";
  //create new agent
  const agent=new HttpAgent({host:localhost});
  //TODO: while deploying live remove following line
  agent.fetchRootKey();
  //useState Hoooks
  const [name,setName]=useState();
  const [asset,setAsset]=useState();
  const [owner,setOwner]=useState();
  const [button,setButton]=useState();
  const [priceInput,setPriceInput]=useState();
  const [loaderHidden ,setLoaderHidden]=useState(true);
  const [blur,setBlur]=useState();
  const [sellStatus,setSellStatus]=useState("");
  const [priceLabel,setPriceLabel]=useState();
  const [shouldDisplay,setDisplay]=useState(true);
  let MemeActor;
  
  async function loadMeme(){
    //create new actor from idlFactory
      MemeActor= await Actor.createActor(idlFactory,{
        agent,
        canisterId:id,
      });
      //async function calls
      const name= await MemeActor.getName();
      const owner=await MemeActor.getOwner();
      const imageData= await MemeActor.getAsset();
      //to store image in binary
      const imageContent =new Uint8Array(imageData);
      //create blob object
      //A blob object is simply a group of bytes that holds the data stored in a file.
      //The content of the blob can easily be read as ArrayBuffer which makes blobs very convenient to store the binary data.

      const image= URL.createObjectURL(new Blob([imageContent.buffer],{type:"image/png"}));
      setName(name);
      setOwner(owner.toText());
      setAsset(image);
      //if in collection page
      if(props.role == "collection")
      {
        const memeIsListed=await memera.isListed(props.id);
        //if listed change properties of nft
        if(memeIsListed)
        {
          setOwner("Memera");
          setBlur({filter:"blur(6px)"});
          setSellStatus("Listed")
        }
        else{
          setButton(<Button handleClick={handleSell} text="Set Price to Sell"/>);
        }
        
      }
      //on discover page
      else if (props.role == "discover")
      {
        //if not own nft show buy button
        const originalOwner= await memera.getOriginalOwner(props.id);
        if(originalOwner.toText() != CURRENT_USER_ID.toText()){
        setButton(<Button handleClick={handleBuy} text="Buy"/>);
        }
        if(originalOwner.toText() == "Memera"){
          setOwner("Memera");
        }
        
      }
    }
  useEffect(()=>{
    loadMeme();
  },[]);
  return (
    <div style={{display:shouldDisplay?"inline":"none"}} className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={asset}
          style={blur}
        />
         <div hidden={loaderHidden} className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
        <div className="disCardContent-root">
        {priceLabel}
          <h2 className="disTypography-root makeStyles-bodyText-24 disTypography-h5 disTypography-gutterBottom">
            {name}<span className="purple-text"> {sellStatus}</span>
          </h2>
          <p className="disTypography-root makeStyles-bodyText-24 disTypography-body2 disTypography-colorTextSecondary">
            Owner: {owner}
          </p>
          {priceInput}
          {button}
        </div>
      </div>
    </div>
  );
}

export default Item;
