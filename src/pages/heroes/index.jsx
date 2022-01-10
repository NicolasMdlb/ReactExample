import React from "react";
import Thumbnail from "../../components/thumbnail/index";
import "../../styles/thumbnail_list.css";

function Heroes() {
  var arrThumbnail = [];

  for (let index = 0; index < 6; index++) {
    arrThumbnail.push(<Thumbnail />);
  }

  return (
    <div className="Heroes">
      <h1>Heroes of Marvel</h1>
      <div className="thumbnail-space">{arrThumbnail}</div>
    </div>
  );
}

export default Heroes;
