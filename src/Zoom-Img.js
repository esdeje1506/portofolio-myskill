import React, { useState } from "react";

function Zoom_Img(prop) {
  const [zooming, setZooming] = useState(false);
  function zoom_in(e) {
    setZooming(true);
    document.body.style.overflow = "hidden";
    e.target.parentElement.parentElement.style =
      "box-shadow: 0px 0 12px 3px #888888;";
  }
  function zoom_close(e) {
    setZooming(false);
    document.body.style.overflow = "auto";
    e.target.parentElement.parentElement.style = "";
  }
  return (
    <>
      {zooming && (
        <div className="zoom-frame">
          {zooming && (
            <button className="delete-btn" onClick={zoom_close}>
              X
            </button>
          )}

          <div className="img-frame">
            <img className="img-zoom" src={prop.src} alt={prop.alt} />
          </div>
        </div>
      )}
      <div className="zoom-wrap">
        <img src={prop.src} alt={prop.alt} onClick={zoom_in} />
      </div>
    </>
  );
}

export default Zoom_Img;
