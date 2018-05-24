import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-dist/css/bootstrap.min.css';

class MensajeU extends Component {
    render() {
        return (
            <div className="container-fluid mensajeU">
                <p>{this.props.mensaje}</p>
            </div>
        );
    }
}
export default MensajeU;
