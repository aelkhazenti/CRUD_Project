import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import swal from 'sweetalert';
import axios from 'axios';

export default class ShowData extends Component {



    constructor(){
        super();

   this.state= {
       tables:[],
       colomns:[]
        }



    }


    componentDidMount() {
        swal("DATA BASE CONNECT  !", "the database is successfully connected", "success");

        axios.get(
            'http://127.0.0.1:8001/selectTable'
        ).then(response=>{
            this.setState({ tables: response.data  });
            }

        )

        console.log(this.state.tables);

    }


    render() {



        return (

            <div className="container"  >
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
                    <form className="form-inline my-2 my-lg-0">


                        <div className="uk-margin">
                            <div className="uk-inline uk-width-1-1">
                                <a href="/" className="w3-bar-item w3-button"><i className="fa fa-sign-in"></i> Deconnecter </a>
                            </div>
                        </div>

                    </form>
                </nav>


<br/>
<br/>
<br/>
<br/>
<br/>

                    <div
                        className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s uk-card uk-card-default uk-card-body">

                    <form  action="/desctTable" method="GEt"  >
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-horizontal-select">Select your tables </label>
                        <div className="uk-form-controls">
                            <select className="uk-select uk-form-width-medium " id="form-horizontal-select"  id="tableNom" name="tableNom"
                                    required >

                        {
                            this.state.tables.map(category=>{
                                return(
                                  <option value={category} >{category} </option>

                                )
                            })

                        }

                </select>
                            <input className="uk-button uk-button-primary " type="submit" value="connect" />
            </div>
                    </div>
                    </form>
                    </div>



            </div>

        )

    }

}


if (document.getElementById('ShowData')) {
    ReactDOM.render(<ShowData />, document.getElementById('ShowData'));
}
