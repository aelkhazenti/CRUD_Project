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
                <h1> exemple work  </h1>

            </div>
        );
    }





}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}


