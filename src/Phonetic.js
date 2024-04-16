import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {/* Only displays the audio link if there is a valid file */}
      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
      <br />
      {/* Displays as many phonetic texts as there are returned */}
      {props.phonetic.text ? props.phonetic.text : ""}
    </div>
  );
}