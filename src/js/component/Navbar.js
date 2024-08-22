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
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                        </button>
                        <ul class="dropdown-menu">
                        {
                                store.favorites.map((item, index) => (
                                    <p key={index} className="dropdown-item" onClick={() => actions.removeFromFavorites(item)}>
                                        {item}
                                    </p>
                                )
                            )}
                        </ul>
                    </div>
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