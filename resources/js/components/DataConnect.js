import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import swal from 'sweetalert';

export default class DataConnect extends Component {

    render() {

        return (

            <div className="container">
                <div className="container">
                    <body className="align">
                    <h1> Connect to DATABASE </h1>


                    <button className="uk-button uk-button-primary"> <a href="/unsedb" >insert data</a> </button>


                    <div className="grid">



                        <form className="form login"  id="formSub" action="/connectdb" method="GEt" >


                            <div className="form__field">
                                <label htmlFor="Host">
                                    <svg className="icon">
                                        <a uk-icon="server"></a>
                                    </svg>
                                    <span className="hidden">Host adress </span></label>
                                <input id="Host" type="text" name="Host" className="form__input"
                                       placeholder="Hostrrr adress" required

                                />
                            </div>

                            <div className="form__field">
                                <label htmlFor="database">
                                    <svg className="icon">
                                        <a uk-icon="database"></a>
                                    </svg>
                                    <span className="hidden">database name </span></label>
                                <input id="database" type="text" name="database" className="form__input"
                                       placeholder="database name" required

                                />
                            </div>

                            <div className="form__field">
                                <label htmlFor="user">
                                    <svg className="icon">
                                        <a uk-icon="user"></a>

                                    </svg>
                                    <span className="hidden">user</span></label>
                                <input id="user" type="text" name="user" className="form__input"
                                       placeholder="user" required

                                />
                            </div>


                            <div className="form__field">
                                <label htmlFor="password">
                                    <svg className="icon">
                                        <a uk-icon="lock"></a>
                                    </svg>
                                    <span className="hidden">password</span></label>
                                <input id="password" type="password" name="password" className="form__input"
                                       placeholder="password" required

                                />
                            </div>




                            <div className="form__field">
                                <input type="submit" value="Connect"   />
                            </div>

                        </form>



                    </div>
                    </body>


                </div>


            </div>




        );
    }



}

if (document.getElementById('DataConnect')) {
    ReactDOM.render(<DataConnect />, document.getElementById('DataConnect'));
}
