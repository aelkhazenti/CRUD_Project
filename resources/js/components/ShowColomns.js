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


                                            {/*==============================================================================*/}
                                            {/*it's not a diynamic table you need to enter your coloms after value.xxxx*/}
                                            {/*==============================================================================*/}

                                                <td> {value.nom}  </td>
                                                <td> {value.capacite}  </td>
                                                <td> {value.id_a}  </td>
                                                <td> {value.loc}  </td>
                                                <td> {value.ada}  </td>

                                            {/*==============================================================================*/}
                                            {/*==============================================================================*/}
                                            {/*==============================================================================*/}


                                            <td>
                                                <Popup modal trigger={<button className="uk-button uk-button-default"  >afficher</button>}  >
                                                    <form>
                                                        <fieldset className="uk-fieldset">
                                                            <legend className="uk-legend">Legend</legend>
                                                            <div className="uk-margin">
                                                                {
                                                                    this.state.colomns.map(hello => {
                                                                        return (
                                                                            <tr>
                                                                                <td> {hello}   :  <input placeholder={hello} />  </td>


                                                                            </tr>
                                                                        )
                                                                    })
                                                                }


                                                            </div>
                                                        </fieldset>

                                                        <button className="uk-button uk-button-primary" >Click Me</button>
                                                    </form>

                                                </Popup>
                                            </td>
                                            <td>
                                                <Popup modal trigger={<button className="uk-button uk-button-primary" >modifier</button>}  >
                                                    <form>
                                                        <fieldset className="uk-fieldset">
                                                            <legend className="uk-legend">Legend</legend>
                                                            <div className="uk-margin">
                                                                {
                                                                    this.state.colomns.map(hello => {
                                                                        return (
                                                                            <tr>
                                                                                <td> {hello}   :  <input placeholder={hello} />  </td>


                                                                            </tr>
                                                                        )
                                                                    })
                                                                }


                                                            </div>
                                                        </fieldset>

                                                        <button className="uk-button uk-button-primary" >save</button>
                                                    </form>

                                                </Popup>
                                            </td>
                                            <td>
                                                <button className="uk-button uk-button-danger">supprimer</button>
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
