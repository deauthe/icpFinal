import React from "react";
import "./Create.css";
import { useDropzone } from "react-dropzone";
import Dropzone from "./DropzoneComp/Dropzone";
const Create = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-between items-start w-[90%] md:w-[70%] ss:w-[80%] mt-[40px]">
        <div className="w-full font-poppins">
          <h1 className="text-purple-500 text-[21px] ss:text-[25px] font-[700] uppercase">
            Create New NFT
          </h1>
          <p className="text-gray-300 lowercase text-[15px] ss:text-[18px]">
            You can set preferred display name, create your profile URL and
            manage other personal settings.
          </p>
          <br />
          <h2 className="text-purple-500 text-[21px] ss:text-[25px] font-[700] uppercase">
            Image, Video, Audio or 3D Model
          </h2>
          <p className="text-gray-300 lowercase text-[15px] ss:text-[18px]">
            File types supported: JPG,PNG,GIF,SVG,MP4,MP3,WAV
          </p>
        </div>
        <br />

        <Dropzone />
      </div>
    </section>
  );
};

export default Create;
