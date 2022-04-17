import './HomePoints.css';

import React, { useEffect, useState } from 'react';

const HomePoints = () =>{
    const [numPoints, setNumPoints] = useState(0);
    // use effect

    return(
        
        <div className = "pointContainer">
            <div className="progressCircle">
                <h1>{numPoints}</h1>
            </div>
            
        </div>
        
    );
}

export default HomePoints;
