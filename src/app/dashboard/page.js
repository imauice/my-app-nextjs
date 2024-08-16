"use client"
import React, { useState, useEffect } from 'react';


const Dashboard = () => {
    const [countClick, setCountClick] = useState(0);

    function handleClick() {
        setCountClick(countClick+1); 
        console.log('Button clicked', countClick);
    } 

    useEffect(() => {
        console.log('test click');
    }, []);

    return (
        <div>
          
            <h1>Number of clicks: {countClick}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Dashboard;