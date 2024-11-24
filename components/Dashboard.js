import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/user/12345").then((res) => setUser(res.data)); // Replace with dynamic user ID
    }, []);

    if (!user) return <p>Loading...</p>;

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {user.name}</p>
            <p>Total Reward Points: {user.rewardPoints}</p>
            <h3>Your Orders:</h3>
            <ul>
                {user.orders.map((order, index) => (
                    <li key={index}>
                        {order.productName} - {order.deliveryOption} (CO₂ Saved: {order.co2Saved}%)
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
