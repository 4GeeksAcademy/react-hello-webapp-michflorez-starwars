import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsVehicles = () => {
   
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        setLoading(true);
        fetch(`https://www.swapi.tech/api/vehicles/${id}`)
            .then(resp => {
                if (!resp.ok) {
                    throw new Error("Network response was not ok");
                }
                return resp.json();
            })
            .then(data => {
                setData(data.result.properties);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);
    useEffect(() => {
console.log(data)

    }, [data])
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No details found for this character.</div>;

    // Construct the image URL using the character's ID
    const imgUrl = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Character Image */}
                <div className="col-md-4">
                    <img 
                        src={imgUrl} 
                        alt={data.name} 
                        className="img-fluid rounded shadow-lg"
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                    />
                </div>
               
                <div className="col-md-8">
                    <h1 className="display-4">{data.name}</h1>
                    <p className="lead">{data.description || "A character within the Star Wars universe."}</p>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <h5>Model</h5>
                            <p>{data.model}</p>
                        </div>
                       

                    </div><div className="col-md-4">
                        <div className="col-md-4">
                            <h5>Manufacturer</h5>
                            <p>{data.manufacturer} cm</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Cost</h5>
                            <p>{data.cost_in_credits} kg</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Crew</h5>
                            <p>{data.crew}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Cargo capacity</h5>
                            <p>{data.cargo_capacity}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Name</h5>
                            <p>{data.name}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>consumables</h5>
                            <p>{data.consumables}</p>
                        </div> 
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsVehicles;

   