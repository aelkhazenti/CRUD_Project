import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import swal from 'sweetalert';


export default class Example extends Component {

handlesubmit(){


    $(function () {


        $('#formSub').submit(function(){

            var formSub = (this);

            $.ajax({
                type: 'POST' ,
                url:  '/connectdb' ,
                data: $('#formSub') .serialize() ,
                success: function (Response) {

                console.log(Response)
                } ,
            })

        }   )
    })


}





    render() {

        return (



            <div className="container">
                <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
                     uk-height-viewport>
                    <div className="uk-width-1-1">
                        <div className="uk-container">
                            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                                <div className="uk-width-1-1@m">
                                    <div
                                        className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                        <h3 className="uk-card-title uk-text-center">Connect to DATABASE</h3>
                                        <form  className="form login"  id="formSub" action="/connectdb" method="GEt"  >
                                            <div className="uk-margin">
                                                <div className="uk-inline uk-width-1-1">
                                                    <span className="uk-form-icon" uk-icon="icon: server"></span>

                                                    <input className="uk-input uk-form-large" id="Host" type="text" name="Host"
                                                           placeholder="Host adress" required
                                                    />
                                                </div>
                                            </div>
                                            <div className="uk-margin">
                                                <div className="uk-inline uk-width-1-1">
                                                    <span className="uk-form-icon" uk-icon="icon: database"></span>
                                                    <input className="uk-input uk-form-large" id="database" type="text" name="database"
                                                           placeholder="database name" required
                                                    />
                                                </div>
                                            </div>
                                            <div className="uk-margin">
                                                <div className="uk-inline uk-width-1-1">
                                                    <span className="uk-form-icon" uk-icon="icon: user"></span>
                                                    <input className="uk-input uk-form-large" id="user" type="text" name="user"
                                                           placeholder="user" required
                                                    />
                                                </div>
                                            </div>

                                            <div className="uk-margin">
                                                <div className="uk-inline uk-width-1-1">
                                                    <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                                    <input className="uk-input uk-form-large" id="password" type="password" name="password"
                                                           placeholder="password" required/>
                                                </div>
                                            </div>
                                            <div className="uk-margin">
                                                <button
                                                    className="uk-button uk-button-primary uk-button-large uk-width-1-1" type="submit" >Connect
                                                </button>
                                            </div>
                                            <div className="uk-text-small uk-text-center">
                                                Not registered? <a href="#">Create an account</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }





}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}


