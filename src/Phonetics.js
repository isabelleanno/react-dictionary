import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  if (props.phonetic !== null && props.Phonetics !== undefined) {
    return (
      <h4 className="d-inline mx-3 lightgray">
        {" "}
        <FontAwesomeIcon icon={faVolumeHigh} /> ({props.phonetic})
      </h4>
    );
  } else {
    return null;
  }
}
