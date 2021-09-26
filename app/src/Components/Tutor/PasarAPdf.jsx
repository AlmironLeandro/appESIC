import * as React from 'react';


import '@react-pdf-viewer/core/lib/styles/index.css';

const PasarAPdf = (props) => {
 
const type = "application/pdf"

const base64toBlob = (data) => {
  // Cut the prefix `data:application/pdf;base64` from the raw base 64
  const base64WithoutPrefix = data.substr('data:application/pdf;base64,'.length);
  const bytes = atob(base64WithoutPrefix);
  let length = bytes.length;
  let out = new Uint8Array(length);

  while (length--) {
      out[length] = bytes.charCodeAt(length);
  }

  return new Blob([out], { type: 'application/pdf' });

}
const blob = base64toBlob(props.documento);
const url = URL.createObjectURL(blob);

    return (
        <div>
            {console.log(url)}
            {/* <object
             type="application/pdf" 
             data={content} style={{ width: "100%", height: "842pt" }} /> */}
        </div>
    );
};

export default PasarAPdf;