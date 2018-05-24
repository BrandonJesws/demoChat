import React, { Component } from 'react';
import './App.css';
import './bootstrap-4.0.0-dist/css/bootstrap.min.css';
import $ from "jquery";

class Encabezado extends Component {
    render() {
        $(document).ready(function () {
            $(".encabezado").on("click", function () {
                $(this).next().toggleClass("is-active");
                return false;
            });
        });
        return (
            <div className="col-12 encabezado bt">
                <div className="row">
                    <div className="col-6">
                        <h3>ChatBot</h3>
                    </div>
                    <div className="col-6">
                        <img className="" src="brand.jpg" alt="logo" />
                    </div>
                </div>
            </div>
        );
    }
}
export default Encabezado;