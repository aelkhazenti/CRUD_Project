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

        }else{
            echo "entrer votre information ";
        }

       $this->selectTable();

//        return view('showTabl');
    }

public function selectTable(){

    $host = $_COOKIE['host'];
    $user= $_COOKIE['user'];
    $mdp = $_COOKIE['mdp'];
    $database = $_COOKIE['database'];

    $conn  = new \mysqli($host, $user, $mdp, $database);


    $tableList = array();
    $res = mysqli_query($conn,"SHOW TABLES");
    while($cRow = mysqli_fetch_array($res))
    {
        $tableList[] = $cRow[0];


    }
            print_r($tableList);
    return $tableList;

}


    public function inse(Request $request){






    }




}
