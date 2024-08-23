import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsPlanets = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.swapi.tech/api/planets/${id}`)
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>No details found for this character.</div>;

    // Construct the image URL using the character's ID
    const imgUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

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
                            <h5>Diameter</h5>
                            <p>{data.diameter}</p>
                        </div>
                           <div className="col-md-4">
                            <h5>Rotation period</h5>
                            <p>{data.rotation_period} </p>
                        </div>
                        <div className="col-md-4">
                            <h5>orbital period</h5>
                            <p>{data.orbital_period} </p>
                        </div>
                        <div className="col-md-4">
                            <h5>Gravity</h5>
                            <p>{data.gravity}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Climate</h5>
                            <p>{data.climate}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Terrain</h5>
                            <p>{data.terrain}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>name</h5>
                            <p>{data.name}</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPlanets;

   