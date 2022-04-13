import { Button } from "@mui/material";
import React from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";

const ImageUploader = () => {
  return (
    <div className="outerBox">
      <div className="title">
        <h2>Image Uploader</h2>
        <p>Image file of Jpeg or Png</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <img src={ImageLogo} alt="imagelogo" />
          <p>Drug & Drop here</p>
        </div>
        <input className="imageUploadInput" multiple name="imageURL" />
      </div>
      <p>or</p>
      <Button variant="contained">
        Select file
        <input className="imageUploadInput" />
      </Button>
    </div>
  );
};

export default ImageUploader;
