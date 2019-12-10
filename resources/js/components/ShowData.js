import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import swal from 'sweetalert';


export default class ShowData extends Component {

    render() {

        return (

            <div className="container"  >

                <div className="uk-padding ">

                    <table className="uk-table uk-table-hover uk-table-divider">
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Preno</th>
                            <th>Email</th>
                            <th>Addres </th>
                            <th>prix</th>
                            <th>l'etat du commande</th>
                            <th>afficher</th>
                            <th>modifier</th>
                            <th>supprimer</th>


                        </tr>
                        </thead>
                        <tbody>
                        <tr  >
                            <td>elkhewa</td>
                            <td>aymane</td>
                            <td>ayyy</td>
                            <td>daa</td>
                            <td> 141414DH</td>
                            <td>daddas</td>
                            <td>    <button className="uk-button uk-button-default" onClick={this.affi} >afficher</button></td>
                            <td>    <button className="uk-button uk-button-primary"  >modifier</button></td>
                            <td><button className="uk-button uk-button-danger"  >supprimer</button></td>

                        </tr>
                        <tr  >
                            <td><a href="/login">login</a></td>
                            <td>aymane</td>
                            <td>ayyy</td>
                            <td>daa</td>
                            <td> 141414DH</td>
                            <td>daddas</td>
                            <td>    <button className="uk-button uk-button-default">afficher</button></td>
                            <td>    <button className="uk-button uk-button-primary"><a href="/login">modifier</a> </button></td>
                            <td><button className="uk-button uk-button-danger"  ><a>supprimer</a></button></td>

                        </tr>
                        </tbody>
                    </table>



                </div>

            </div>

        )

    }

}


if (document.getElementById('ShowData')) {
    ReactDOM.render(<ShowData />, document.getElementById('ShowData'));
}
