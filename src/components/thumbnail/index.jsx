import React from "react";
import "../../styles/thumbnail.css";
import waitImage from "./../../assets/animated-waiting-circle-5.gif";

function Thumbnail(props) {
  let altName = props.heroe ? "Heroe" : "Collection";


  return (
    <div className="thumbnail">
      <img
        className="thumbnail-img"
        src={props.picture !== "" ? props.picture : waitImage}
        alt={altName + " " + props.name}
      />
      <h2>{props.name}</h2>
    </div>
  );
}

export default Thumbnail;