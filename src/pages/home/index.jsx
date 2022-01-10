import React from "react";
import Thumbnail from "../../components/thumbnail/index";
import { editors } from "../../data/editors"
import "../../styles/home.css";
import "../../styles/thumbnail_list.css";

// TODO: onClick recuperer l'id de la marque et envoyer cette ID dans le URL
// TODO: Utislie un Link pour rediriger vers la page souhaiter

function Home() {
  return (
    <div className="home">
      <div className="title">
        <h1>List of Heroes</h1>
        <div className="thumbnail-space">
					{
						editors.map(e => <Thumbnail name={e.name} picture={e.picture} heroe={false} />)
					}
				</div>
      </div>
    </div>
  );
}

export default Home;