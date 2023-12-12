import React from "react";

export default function Photos(props) {
  if (props.photos !== undefined && props.photos !== null) {
    return (
      <div className="photos mt-3">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6 ml-3 mt-3" key={index}>
                <img src={photo.src.landscape}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
