import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import swal from 'sweetalert';

export default class ShowData extends Component {

    render() {

        return (

            <div className="container">


            </div>
        )

    }

}


if (document.getElementById('ShowData')) {
    ReactDOM.render(<ShowData />, document.getElementById('ShowData'));
}
