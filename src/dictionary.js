import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./App.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  //Listens to the input & updates the "keyword" or search term
  function updateKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  //Changes results state- populates it with the results from the Dictionary API
  function handleResponse(response) {
    setResults(response.data);
  }
  //Handles pexels photo API response
  function handlePhotoResponse(response) {
    setPhotos(response.data.photos);
  }

  //Calls both APIs on submit or when enter is clicked
  function handleSubmit(event) {
    //Dictionary Api (link here:) https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "f7o330d7cc44511d503ab6b4tdbb899b";
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(handleResponse);

    //Pexels Photo API: https://www.pexels.com/api/documentation/?utm_medium=email&utm_source=pexels&utm_campaign=API%20Onboarding&utm_content=welcome%20email&language=javascript
    //This code was confusing for me- he pexels API documentation isn't that great in my opinion. But this article helped me
    //figure it out so I wanted to save the link to that as well for future use: https://www.c-sharpcorner.com/article/sharing-data-from-parent-to-child-component-in-angular-8/

    let access_token =
      "XYOrMtJgHZNfjQYvaJLiHXcS0t7jd3x8o17VLrxrunGhujDLdlgbGJGm";
    let photoApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    axios
      .get(photoApiUrl, { headers: { Authorization: `${access_token}` } })
      .then(handlePhotoResponse);
  }
  //Allows the user to press enter and submit the search form
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }
  //Return statement- this is the search form initially, but will become populated with results on submit.
  return (
    <div className="dictionary" onKeyUp={handleKeyPress}>
      <div className="input-group">
        <input
          type="text"
          className="form-control light-gray"
          id="inputBorder"
          placeholder="Ex. yoga, wine, plants, coding"
          onChange={updateKeyword}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
