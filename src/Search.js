import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // documentation at: https://dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleKeywordChange} />
    </form>
  );
}
