import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-dist/css/bootstrap.min.css';

class ChatInput extends Component {
    render() {
        return (
            <div className="col-12" onSubmit={this.submitHandler}>
                <input id="speech" type="text" className="form-control inText" placeholder="Escribe un mensaje" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
        );
    }
}

export default ChatInput;
