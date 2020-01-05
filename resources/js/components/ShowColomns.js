import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import swal from 'sweetalert';
import DataConnect from "./DataConnect";

import Popup from "reactjs-popup";

export default class ShowColomns extends Component {




    constructor(){
        super();

        this.state= {
            datas:[],
            colomns:[],

        }

         araya :[] ;

    }


    componentDidMount() {
        axios.get(
            'http://127.0.0.1:8001/showData'
        ).then( datas=>{
            this.setState( {datas: datas.data} )
        } );

        axios.get(
            'http://127.0.0.1:8001/returnShowdata',
        ).then(colomns=>{
            this.setState({colomns: colomns.data});
        });


    }


    render() {

        return (


            <div id="container" >

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

                <div className="uk-padding ">
                <table className="uk-table uk-table-hover uk-table-divider" >
                    <thead>
                    <tr>

                        {
                            this.state.colomns.map(categ=>{

                                return(


                                    <th  >{categ }  </th>


                                )
                            })



                        }

                        <th>afficher</th>
                        <th>modifier</th>
                        <th>supprimer</th>

                    </tr>

                    </thead>

                    <tbody>


                        {
                                this.state.datas.map((value, index, array) => {
                                    return (
                                        <tr>
                                            {
                                                this.state.colomns.map(categ=>{
                                                    return(
                                                        <td  >{value[categ]}  </td>
                                                    )
                                                })

                                            }

                                            <td>
                                                <Popup modal trigger={<button class="btn btn-light btn-lg"  >afficher</button>}  >
                                                    <form>
                                                        <fieldset className="uk-fieldset">
                                                            <legend className="uk-legend">Legend</legend>
                                                            <div className="uk-margin">
                                                                {
                                                                    this.state.colomns.map(hello => {
                                                                        return (
                                                                            <tr>
                                                                                <td> {hello}   :  <input placeholder={value[hello]} disabled/>  </td>


                                                                            </tr>
                                                                        )
                                                                    })
                                                                }


                                                            </div>
                                                        </fieldset>

                                                        {/*<button className="uk-button uk-button-primary" >save</button>*/}
                                                    </form>

                                                </Popup>
                                            </td>
                                            <td>
                                                <Popup modal trigger={<button type="button"
                                                                              className="btn btn-warning btn-lg">modifier</button>}  >
                                                    <form  action="" method="" id="modification"  >
                                                        <fieldset className="uk-fieldset">
                                                            <legend className="uk-legend">modification</legend>
                                                            <div className="uk-margin">
                                                                {
                                                                    this.state.colomns.map(hello => {
                                                                        return (
                                                                            <tr>
                                                                                <td> {hello}   :  <input placeholder={value[hello]} />  </td>


                                                                            </tr>
                                                                        )
                                                                    })
                                                                }


                                                            </div>
                                                        </fieldset>

                                                        <button className="uk-button uk-button-primary" value="" >save</button>
                                                    </form>

                                                </Popup>
                                            </td>
                                            <td>
                                                <Popup modal trigger={<button type="button"
                                                                              className="btn btn-danger btn-lg">supprimer</button>}  >
                                                    <form  action="/deleteData" method="GEt" id="modification"  >
                                                        <fieldset className="uk-fieldset">
                                                            <legend className="uk-legend">suppresion</legend>
                                                            <div className="uk-margin">
                                                                {
                                                                    this.state.colomns.map(hello => {
                                                                        return (
                                                                            <tr>
                                                                                <td  > {hello}   :  <input value={value[hello]} name="dataName" id="dataName"   />  </td>


                                                                            </tr>
                                                                        )

                                                                    })
                                                                }


                                                            </div>
                                                        </fieldset>

                                                        <button className="uk-button uk-button-primary" type="submit" >supprimerrr</button>
                                                    </form>

                                                </Popup>
                                            </td>

                                        </tr>

                                    )




                                })


                        }


                    </tbody>




                </table>







            </div>


                </div>





        )

    }


}



if (document.getElementById('ShowColomns')) {
    ReactDOM.render(<ShowColomns />, document.getElementById('ShowColomns'));
}
