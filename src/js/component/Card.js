import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "/workspaces/react-hello-webapp-michflorez-starwars/src/styles/card.css";

const Card = ({ name, id, category }) => {
    const { store, actions } = useContext(Context);

    const item = {
        uid: id,
        name: name,
        category: category,
        img: `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`
    };

    const isFavorite = store.favorites.some(fav => fav.uid === id);

    const handleFavorite = () => {
        actions.toggleFavorite(item);
    };

    return (
        <div className="card" className="d-flex justify-content-center flex-wrap" style={{ width: "18rem" }}>
            <img src={item.img} className="card-img-top" alt={name} onError={({ currentTarget }) => {
    currentTarget.onerror = null; // prevents looping
    currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={`/${category}/${id}`} className="btn btn-primary">Details</Link>
                <button onClick={addToFavorites} className="btn btn-warning ms-2">
                     "Remove from Favorites" 
                </button>
                <button onClick={() => actions.removeFromFavorites(fav.uid)} className="btn btn-danger ms-2">
                            Remove
                        </button>
                    </div>
            </div>
        
    );
};

export default Card;
