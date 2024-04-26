import React from "react";
import ReactAudioPlayer from 'react-audio-player';

import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {/* Only displays the audio link if there is a valid file */}
      {props.phonetic.audio && (
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      )}
      {/* Displays as many phonetic texts as there are returned */}
      <div className="PhoneticText">
        {props.phonetic.text ? props.phonetic.text : ""}
      </div>
    </div>
  );
}