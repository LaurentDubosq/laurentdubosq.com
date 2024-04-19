import React from "react";

const Gauges = ({ gauge }) => {
    return (
        <li className="gauge-container" style={{ "--width": gauge.level + "%" }}>
            <p>{gauge.title}</p>
            <p className="level">{gauge.level}%</p>
        </li>
    );
};

export default Gauges;
