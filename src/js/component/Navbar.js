
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Star Wars
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="favoritesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Favorites
                        </a>
                        <div className="dropdown-menu" aria-labelledby="favoritesDropdown">
                            {store.favorites.length === 0 ? (
                                <span className="dropdown-item">No favorites yet</span>
                            ) : (
                                store.favorites.map((item, index) => (
                                    <span key={index} className="dropdown-item" onClick={() => actions.removeFromFavorites(item)}>
                                        {item.name} &times;
                                    </span>
                                ))
                            )}
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/read-later">
                            Read Later
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
