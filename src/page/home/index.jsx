import React from "react";
import "./style.css";
import Thumbnail from "./../../components/thumbnail/index";

function index() {
//   const thumbnail = [];
//   const data = [
//     { name: "Marvel", picture: "./images/PictureHeroes/Marvel.jpg" },
//     { name: "DC Comics", picture: "./images/PictureHeroes/dccomics.png" },
//   ];

//   data.forEach((e) => {
//     thumbnail.push(
//       <Thumbnail name={e.name} picture={e.picture} heroe={false} />
//     );
//   });

  return (
    <div className="home">
      <div className="title">
        <h1>List of Heroes</h1>
        {/* <div className="thumbnail-space">{thumbnail}</div> */}
      </div>
    </div>
  );
}

export default index;