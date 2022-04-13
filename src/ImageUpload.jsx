import React, { useState } from "react";
import { Button } from "@mui/material";
import upload from "./images/upload.png";
import "./ImageUpload.css";
import storage from "./firebase";
import { ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const onFileUploadToFirebase = (e) => {
    // console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const loaderRef = ref(storage, "images/" + file.name);

    // firebaseのstorageにuploadされた
    // uploadBytes(loaderRef, file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });

    // 以下line23だけで画像のuploadはできるが進捗状況まではモニタリングできていない。
    const uploadImage = uploadBytesResumable(loaderRef, file);
    // 以下コードでモニタリング開始
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (error) => {
        console.log(error);
      },
      () => {
        setLoading(false);
        setIsUploaded(true);
      }
    );
  };

  return (
    <>
      {loading ? (
        <h2>Uploading...</h2>
      ) : (
        <>
          {isUploaded ? (
            <h2>Completed uploading</h2>
          ) : (
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
                  accept=".png, .jpeg, .jpg"
                  onChange={onFileUploadToFirebase}
                />
              </div>
              <p>or</p>
              <Button variant="contained">
                Select file
                <input
                  className="imageUploadInput"
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={onFileUploadToFirebase}
                />
              </Button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ImageUploader;
