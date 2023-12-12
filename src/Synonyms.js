import React from "react";

export default function Synonyms(props) {
  if (props.synonym !== null) {
    return (
      <div className="synonyms">
        <ul>
          <li>
            <b>See also </b>
          </li>
          {props.synonym.map(function (synonym, index) {
            return (
              <li className="synonym" key={index}>
                - {synonym}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
