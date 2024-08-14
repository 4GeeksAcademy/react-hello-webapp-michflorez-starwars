
import React, { useContext } from "react";

import Card from "../component/Card";
import { Context } from "../store/appContext";


export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <div className="text-center mt-5">
    <h1>Characters</h1>
    <div className="d-flex">
        {store.characters.map((character) => (
            <Card 
                key={character.uid} 
                name={character.name} 
                id={character.uid} 
                category="characters" 
            />
        ))}
    </div>
</div>

            <h1>Vehicles</h1>
            <div className="d-flex flex-wrap">
                {store.vehicles.map((vehicle, index) => (
                    <Card key={index} 
                    name={vehicle.name} 
                    id={vehicle.uid}
                    category="vehicles" />
                ))}
            </div>
            <h1>Planets</h1>
            <div className="d-flex flex-wrap">
                {store.planets.map((planet, index) => (
                    <Card key={index} name={planet.name} id={planet.uid} category="planets" />
                ))}
            </div>
            
        </div>
    );
};
