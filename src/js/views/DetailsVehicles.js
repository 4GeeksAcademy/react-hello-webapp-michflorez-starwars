import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const DetailsVehicles = () => {
   
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        setLoading(true);
        fetch(`https://www.swapi.tech/api/starships/${id}`)
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
                        <p>{data}</p>

                    {/*</div><div className="col-md-4">
                        <div className="col-md-4">
                            <h5>Height</h5>
                            <p>{data.height} cm</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Mass</h5>
                            <p>{data.mass} kg</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Hair Color</h5>
                            <p>{data.hair_color}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Skin Color</h5>
                            <p>{data.skin_color}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Eye Color</h5>
                            <p>{data.eye_color}</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Birth Year</h5>
                            <p>{data.birth_year}</p>
                        </div> */}
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsVehicles;

   