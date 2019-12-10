import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'

import swal from 'sweetalert';
import style from '../../css/index.css';

export default class Example extends Component {

//
// handlehostechange(e){
//
//    this.setState({
//        host : e.target.value
//    });
// }
// handledatabasechange(e){
//     this.setState({
//         databasename : e.target.value
//     });
// }
// handleuserchange(e){
//     this.setState({
//         user : e.target.value
//     });
// }
// handlemdpchange(e){
//     this.setState({
//         mdp: e.target.value
//     });
// }


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

            </div>

        );
    }





}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}


