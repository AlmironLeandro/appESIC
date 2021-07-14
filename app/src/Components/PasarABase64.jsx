import React from "react";
import { Fragment } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const PasarABase64 = () => {
  const [file, setFile] = useState(null);
  const [base64URL, setBase64URL] = useState("");

  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load something...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };

  const handleFileInputChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        console.log("File Is", file);
        this.setState({
          base64URL: result,
          file
        });
      })
      .catch((err) => {
        console.log(err);
      });

    setFile(e.target.files[0]);
  };

  return (
   <Fragment>
         <input type="file" name="file" onChange={handleFileInputChange} />
    </Fragment>
  );
};


export default PasarABase64;