import React, { useEffect, useState } from "react";
import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../src/declarations/meme";
import Button from "./Button";
import { memera } from "../../src/declarations/memera";
import CURRENT_USER_ID from "../index";

function Item(props) {

  const [name, setName] = useState();
  const [owner, setOwner] = useState();
  const [image, setImage] = useState();
  const [button, setButton] = useState();
  const [priceInput, setPriceInput] = useState(0);
  const [loaderHidden, setLoaderHidden] = useState(true);
  const [blur, setBlur] = useState();
  const [sellStatus, setSellStatus] = useState("");
  const [priceLabel, setPriceLabel] = useState(0);

  const id = props.id;

  const localHost = "http://localhost:4943/";
  const agent = new HttpAgent({ host: localHost });
  //TODO: When deploying project on ICP remove the below line
  agent.fetchRootKey();
  let NFTActor;

  async function loadNFT() {
    NFTActor = await Actor.createActor(idlFactory, {
      agent,
      canisterId: id,
    });

    const name = await NFTActor.getName();
    setName(name);

    const owner = await NFTActor.getOwner();
    setOwner(owner.toText());

    const imageData = await NFTActor.getAsset();
    const imageContent = new Uint8Array(imageData);
    const image = URL.createObjectURL(
      new Blob([imageContent.buffer],
        { type: "image/png" })
    );
    setImage(image);

    if (props.role == "collection") {
      const nftIsListed = await memera.isListed(props.id);
      if (nftIsListed) {
        setOwner("Memra");
        setBlur({ filter: "blur(4px)" });
        setSellStatus("Listed");
      }
      else {
        setButton(<Button handleClick={handleSell} text={"Sell"} />);
      }
    }
    else if (props.role == "discover") {
      const originalOwner = await memera.getOriginalOwner(props.id);
      if (originalOwner.toText() != CURRENT_USER_ID.toText()) {
        setButton(<Button handleClick={handleBuy} text={"Buy"} />);
      }
      // const price = await memera.getListedNFTPrice(props.id);
      // setPriceLabel(<PriceLabel sellPrice={price.toString()} />)
    }

    let price;
    function handleSell() {
      console.log("Sell Clicked");
      setPriceInput(<input
        placeholder="Price in DANG"
        type="number"
        className="price-input"
        value={price}
        onChange={(e) => price = e.target.value}
      />);

      setButton(<Button handleClick={sellItem} text={"Confirm"} />);
    }

    async function sellItem() {
      setLoaderHidden(false);
      console.log("Confirm clicked");
      const listingResult = await memera.listItem(props.id, Number(price));
      console.log(listingResult);

      if (listingResult == "Success") {
        const memeraDid = await memera.getMemeraCanisterId();
        const transferResult = await NFTActor.transferOwnership(memeraDid);
        console.log(transferResult);
        if (transferResult == "Success") {
          setBlur({ filter: "blur(4px)" });
          setLoaderHidden(true);
          setButton();
          setPriceInput();
          setOwner("memera");
          setSellStatus("Listed");
        }
      }
    }

    async function handleBuy() {
      console.log("Buy was triggered");
    }

  };

  useEffect(() => {
    loadNFT();
  }, []);

  return (
    <div className="disGrid-item">
      <div className="disPaper-root disCard-root makeStyles-root-17 disPaper-elevation1 disPaper-rounded">
        <img
          className="disCardMedia-root makeStyles-image-19 disCardMedia-media disCardMedia-img"
          src={image}
          style={blur}
        />
        <div className="lds-ellipsis" hidden={loaderHidden}>
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