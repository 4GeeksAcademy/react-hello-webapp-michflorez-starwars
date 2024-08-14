import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
            .then(resp => resp.json())
            .then(data => setData(data.result.properties))
            .catch(error => console.error(error));
    }, [id]);

    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>Gender: {data.gender}</p>
            <p>Height: {data.height}</p>
            {/* Añade más detalles aquí */}
        </div>
    );
};

export default Details;
