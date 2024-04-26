import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // documentation at: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
