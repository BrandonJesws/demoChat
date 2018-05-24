import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-dist/css/bootstrap.min.css';
import MensajeU from './MensajeU.js';
import MensajeB from './MensajeB.js';

class Mensajes extends Component {
    
    componentDidUpdate() {
        // There is a new message in the state, scroll to bottom of list
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    render() {        
         return (
             <div className="mensages" id="messageList">
                {   
                     this.props.mensajes.map((message) => {
                         if (message.usuario === 1) {
                             return <MensajeU key={message.key} username={message.usuario} mensaje={message.mensaje} />
                         }
                            return <MensajeB key={message.key} username={message.usuario} mensaje={message.mensaje} />
                     })
                }
            </div>
        );
    }
}
export default Mensajes;
