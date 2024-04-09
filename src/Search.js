import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
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
