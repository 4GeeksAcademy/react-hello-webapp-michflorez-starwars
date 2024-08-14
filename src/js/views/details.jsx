
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "/workspaces/react-hello-webapp-michflorez-starwars/src/styles/details.css";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const { type, id } = useParams();

    useEffect(() => {
        actions.getDetails(type, id);
    }, [type, id]);

    const details = store.details;

    return (
        <div className="container details-container">
            {details && (
                <>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://starwars-visualguide.com/assets/img/${type === "people" ? "characters" : type}/${id}.jpg`} alt={details.name} className="img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h1>{details.name}</h1>
                            <p>{details.description}</p>
                        </div>
                    </div>
                    <div className="row details-info">
                        <div className="col-md-3">
                            <h5>Appearances</h5>
                            <ul>
                                {details.films && details.films.map((film, index) => (
                                    <li key={index}>{film}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Affiliations</h5>
                            <ul>
                                {details.affiliations && details.affiliations.map((affiliation, index) => (
                                    <li key={index}>{affiliation}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Locations</h5>
                            <ul>
                                {details.locations && details.locations.map((location, index) => (
                                    <li key={index}>{location}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Other Information</h5>
                            <p>Gender: {details.gender}</p>
                            <p>Height: {details.height}</p>
                            <p>Species: {details.species}</p>
                            <p>Vehicles: {details.vehicles}</p>
                            <p>Weapons: {details.weapons}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
