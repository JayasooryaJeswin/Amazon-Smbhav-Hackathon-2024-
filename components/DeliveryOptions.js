import React, { useState, useEffect } from "react";
import axios from "axios";

const DeliveryOptions = () => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/delivery-options").then((res) => {
            setOptions(res.data);
        });
    }, []);

    return (
        <div>
            <h2>Delivery Options</h2>
            {options.map((option, index) => (
                <div key={index}>
                    <h4>{option.type}</h4>
                    <p>{option.description}</p>
                    <p>CO₂ Saved: {option.co2Saved}%</p>
                </div>
            ))}
        </div>
    );
};

export default DeliveryOptions;
