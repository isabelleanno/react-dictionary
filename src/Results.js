import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="col-12">
        <div className="py-3">
          <span>
            <h1 className="display-4 d-inline"> {props.results.word}</h1>{" "}
            <Phonetics phonetic={props.results.phonetic} />
          </span>
        </div>
        <Meanings meaning={props.results} />
      </div>
    );
  } else {
    return "";
  }
}
