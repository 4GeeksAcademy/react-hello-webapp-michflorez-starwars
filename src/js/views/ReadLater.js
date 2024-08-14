
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

export const ReadLater = () => {
    const { store } = useContext(Context);

    return (
        <div className="container">
            <h1>Read Later List</h1>
            <div className="d-flex flex-wrap">
                {store.readLater.map((item, index) => (
                    <Card key={index} item={item} type={item.type} />
                ))}
            </div>
        </div>
    );
};
