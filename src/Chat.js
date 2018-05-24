import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-dist/css/bootstrap.min.css';
import Encabezado from './Encabezado.js';
import $ from "jquery";
import TodoList from './TodoList.js';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="prueba container-fluid">
                <div className="row justify-content-end tabla">
                    <Encabezado/>
                    <div className="col-12 debug__content p-0">
                        <div className="row">
                            <TodoList items={this.state.items} />
                            <form onSubmit={this.handleSubmit}>
                                <input className="entrada" id="new-todo" onChange={this.handleChange} value={this.state.text} />
                                <button>
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
            //messageInternalError = "No entiendo lo que dices",
            //messageSo(rry = "Lo siento, no tengo una respuesta para eso";
            $.ajax({
                type: "POST",
                url: "https://api.dialogflow.com/v1/query",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                headers: {
                    "Authorization": "Bearer 0d3c644d72144464a11323eddf2aa7a6"
                },
                data: JSON.stringify({ query: newItem.text, lang: "es", sessionId: "yaydevdiner" }),
                success: function (data) {
                    var debugJSON = JSON.stringify(data, undefined, 2),
                        spokenResponse = data.result.speech;

                    if (data.result.action === "nombreHeroer") {
                        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(spokenResponse + ' ' + data.result.parameters.Heroes);
                    } else {
                        if (spokenResponse === "") {
                            spokenResponse = "Lo siento, no tengo una respuesta para eso";
                        }
                        $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html(spokenResponse);
                    }
                    $("#response").text(debugJSON);
                },
                error: function () {
                    $("#spokenResponse").addClass("is-active").find(".spoken-response__text").html("No entiendo lo que dices");
                }
            });
    }
}
export default Chat;