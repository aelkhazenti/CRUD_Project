<?php


namespace App\Http\Controllers\api;


use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

use App\Example ;


class conData extends Controller
{

public function connectdb(){

        if (!empty($_GET["Host"] && $_GET["database"])  ){

            $host = $_GET["Host"];
            $database = $_GET["database"];
            $user= $_GET["user"];
            $mdp = $_GET["password"];

            setcookie("host",$host);
            setcookie("database",$database);
            setcookie("user",$user);
            setcookie("mdp",$mdp);


           $conn  = new \mysqli($host, $user, $mdp, $database);


            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $sql = "INSERT INTO user  VALUES ('aymane', 'elkha')";

            if ($conn->query($sql) === TRUE) {
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }



        }else{
            echo "oooo";
        }

        return view('welcome');
    }


    public function inse(Request $request){






    }




}
