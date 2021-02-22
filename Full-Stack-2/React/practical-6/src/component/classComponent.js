import React, { Component } from 'react';
import './classComponent.css'

class ClassComponent extends React.Component {
    render(props) {
        return (
            <>
            <div id="root-class">
                <h1>This is class component</h1>
                <h4> <span className ="red-class">created by: </span> <span className="blue-class">{this.props.rollno}</span></h4>
            </div>
            </>
        );
    }
}

export default ClassComponent;
