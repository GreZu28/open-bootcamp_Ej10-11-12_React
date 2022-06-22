import React from "react";
import { useState } from "react";
import "../../styles/squareStyles.css";

const Square = () => {
    const [color, setColor] = useState(null);
    const [onMouseOver, setOnMouseOver] = useState(false);

    const handleOnMouseOver = () => {
        setOnMouseOver(true);
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let randomColor = `rgb(${red}, ${green}, ${blue})`;
        setColor(randomColor);
    };

    const handleOnMouseLeave = () => {
        setOnMouseOver(false);
    };

    const handleOnDoubleClick = () => {
        setOnMouseOver(false);
    };
    return (
        <div
            className="container"
            onMouseOver={handleOnMouseOver}
            onMouseLeave={handleOnMouseLeave}
            onDoubleClick={handleOnDoubleClick}
            style={
                onMouseOver
                    ? { backgroundColor: color }
                    : { backgroundColor: "black" }
            }
        ></div>
    );
};

export default Square;
