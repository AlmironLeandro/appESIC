import React from "react";
import { Fragment } from "react";



const PasarABase64 = () => {



  const getBase64 = (file) => {
    return new Promise((resolve) => {
     // let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load something...
      reader.onload = () => {
      // Make a fileInfo Object

        baseURL = reader.result;

        resolve(baseURL);
        localStorage.setItem("baseUrl", baseURL)
      };

    });
  };

  const handleFileInputChange = (e) => {

    const file = e.target.files[0];

    getBase64(file)
      .then((result) => {
        file["base64"] = result;

        this.setState({
          base64URL: result,
          file
        });
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <Fragment>
      <input type="file" name="file" onChange={handleFileInputChange} />
    </Fragment>
  );
};


export default PasarABase64;