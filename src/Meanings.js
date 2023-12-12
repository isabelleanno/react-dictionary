import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  if (props.meaning.meanings !== undefined) {
    return (
      <div className="meanings">
        {props.meaning.meanings.map(function (meaning, index) {
          if (index >= 3) {
            return null;
          } else {
            return (
              <div className="meaning mt-3" key={index}>
                <div>
                  <p>
                    {index + 1}.) <i>{meaning.partOfSpeech}</i>
                  </p>
                </div>
                <div className="definition">
                  <p className="ml-4">{meaning.definition}</p>
                  <Synonyms synonym={meaning.synonyms} />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="mt-3 text-left">
        <h3> No results found. Please try again</h3>
      </div>
    );
  }
}
