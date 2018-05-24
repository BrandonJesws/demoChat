import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-dist/css/bootstrap.min.css';

class MensajeB extends Component {
    render() {
        return (
            <div className="container-fluid mensajeB">
                <p>{this.props.mensaje}</p>
            </div>
        );
    }
}
export default MensajeB;