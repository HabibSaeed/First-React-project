import React, { useState } from "react";

const Body = () => {
    const [foodItems, setFoodItems] = useState([
        { id: 1, name: "Burger", price: 10 },
        { id: 2, name: "Pizza", price: 12 },
        { id: 3, name: "Salad", price: 8 },
        // Add more food items here
    ]);

    return (
        <div style={bodyStyle}>
            <h1 style={headingStyle}>Discover Delicious Food</h1>
            <div style={foodListStyle}>
                {foodItems.map((food) => (
                    <div key={food.id} style={foodItemStyle}>
                        <h3>{food.name}</h3>
                        <p style={priceStyle}>${food.price}</p>
                        <button style={orderButtonStyle}>Order Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const bodyStyle = {
    padding: "20px",
};

const headingStyle = {
    textAlign: "center",
    marginBottom: "30px",
    color: "white",
};

const foodListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
};

const foodItemStyle = {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "20px",
    boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
};

const priceStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
};

const orderButtonStyle = {
    backgroundColor: "#ff6f61",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
};

export default Body;
