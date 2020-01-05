<?php


namespace App\Http\Controllers\api;


use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

use App\Example ;


class operationCRUD extends Controller
{


    public function deletteData(){
        if ($_SERVER['REQUEST_METHOD']=="GET") {
            $host = $_COOKIE['host'];
            $user = $_COOKIE['user'];
            $mdp = $_COOKIE['mdp'];
            $database = $_COOKIE['database'];
            $tableName = $_COOKIE['tableName'];

            $data =  $_GET["dataName"];
            $colomns =  $_GET["colomns"];

            $conn = new \mysqli($host, $user, $mdp, $database);

            $sql = "DELETE FROM $database.$tableName where $colomns	= '$data'  ";
            if (mysqli_query($conn, $sql)) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }



        }

        return view('showColomns');

    }



}
