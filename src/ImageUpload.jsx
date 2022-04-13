import React from "react";
import { Button } from "@mui/material";
import upload from "./images/upload.png";
import "./ImageUpload.css";
import storage from './Firebase';

const ImageUploader = () => {
  const onFileUploadToFirebase = () => {

  }


  return (
    <div className="outerBox">
      <div className="title">
        <h2>Image Uploader</h2>
        <p>Image file of Jpeg or Png</p>
      </div>
      <div className="imageUplodeBox">
        <div className="imageLogoAndText">
          <img src={upload} alt="imagelogo" />
          <p>Drug & Drop here</p>
        </div>
        <input
          className="imageUploadInput"
          multiple
          name="imageURL"
          type="file"
          accept=".png .jpeg .jpg"
          onChange={onFileUploadToFirebase}
        />
      </div>
      <p>or</p>
      <Button variant="contained">
        Select file
        <input
          className="imageUploadInput"
          type="file"
          accept=".png .jpeg .jpg"
          onChange={onFileUploadToFirebase}
        />
      </Button>
    </div>
  );
};

export default ImageUploader;
