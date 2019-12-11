import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import swal from 'sweetalert';
import DataConnect from "./DataConnect";


export default class ShowColomns extends Component {



    constructor(){
        super();

        this.state= {
            colomns:[]
        }

    }

    componentDidMount() {

        axios.get(
            'http://127.0.0.1:8001/returnShowdata'
        ).then(colomns=>{
            this.setState({colomns: colomns.data});
        })


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


                                    <th  >{categ}  </th>


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
                            this.state.colomns.map(categ=>{

                                return(
                                    <tr>

                                    <th  >{categ}  </th>

                                        <td>    <button className="uk-button uk-button-default" onClick={this.affi} >afficher</button></td>
                                        <td>    <button className="uk-button uk-button-primary"  >modifier</button></td>
                                        <td><button className="uk-button uk-button-danger"  >supprimer</button></td>

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
