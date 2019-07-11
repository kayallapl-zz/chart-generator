import React, { Component } from "react";

// import { Container } from './styles';

export default class Button extends Component {
    render() {
        return (
            <button onClick={() => this.props.onClick()}>Generate Chart</button>
        );
    }
}