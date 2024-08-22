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

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            actions.removeFromFavorites(item.uid);
        } else {
            actions.addToFavorites(item);
        }
    };

    // Genera la ruta según la categoría
    const getDetailsLink = () => {
        switch (category) {
            case "people":
                return `/people/${id}`;
            case "planets":
                return `/planets/${id}`;
            case "vehicles":
                return `/vehicles/${id}`;
            // Agrega más categorías si es necesario
            default:
                return `/${category}/${id}`;
        }
    };

    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100">
                <img 
                    src={item.img} 
                    className="card-img-top img-fluid" 
                    alt={name} 
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; 
                        currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                    }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{name}</h5>
                    {/* Usa la función getDetailsLink para determinar la ruta correcta */}
                    <Link to={getDetailsLink(category)} className="btn btn-primary mt-auto">Details</Link>
                    <button 
                        onClick={handleFavoriteToggle} 
                        className={`btn mt-2 ${isFavorite ? "btn-danger" : "btn-warning"}`}
                    >
                        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
