import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // documentation at: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "cDDq0G42Ihr6zKNlPHFwV72X3iJ3IYsNZp2iCVSbUL6WIeaJMY1G4qZ2";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <section className="Form">
        <h6>What word would you like to find the meaning of?</h6>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="search" className="WordInput" onChange={handleKeywordChange} />
          <input type="submit" className="Submit" />
        </form>
        <div className="Example">
          e.g. sunrise, storm, trip, code...
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
