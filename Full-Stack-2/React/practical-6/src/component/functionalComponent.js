import React, { Component } from 'react';
import './functionalComponent.css';

function FunctionalComponent(props) {
    return (
       <>
        <div id ="root-function">
            <h1>This is functional Component</h1>
            <h4> <span className = "red-function">created by: </span> <span className="blue-function">{props.name}</span></h4>
        </div>
       </>
    );
}

export default FunctionalComponent;
