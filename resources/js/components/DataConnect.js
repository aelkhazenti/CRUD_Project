import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import swal from 'sweetalert';


export default class DataConnect extends Component {

    render() {

        return (

            <div className="container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.5/css/uikit.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.5/js/uikit.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.5/js/uikit-icons.min.js"></script>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                      crossOrigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
                        crossOrigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
                        crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
                        crossOrigin="anonymous"></script>

                <nav className="navbar fixed-top navbar-light bg-light navber-center"  >

                    <a className="navbar-brand navber-center" href="#" >CRUD PROJECT </a>

                </nav>
<br/>
<br/>
<br/>

                <div className="uk-section uk-section-muted uk-flex uk-flex-middle uk-animation-fade"
                     uk-height-viewport>
                    <div className="uk-width-1-1">
                        <div className="uk-container">
                            <div className="uk-grid-margin uk-grid uk-grid-stack" uk-grid>
                                <div className="uk-width-1-1@m">
                                    <div
                                        className="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large">
                                        <h3 className="uk-card-title uk-text-center">Connect to DATABASE</h3>
                                        <form  className="form login"  action="/connectdb" method="GEt"  >
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

if (document.getElementById('DataConnect')) {
    ReactDOM.render(<DataConnect />, document.getElementById('DataConnect'));
}
