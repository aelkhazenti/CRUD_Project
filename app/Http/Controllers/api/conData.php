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

        return view('showTabl');

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

    $tabyy = $tableList ;
    return $tabyy;

}


    public function  descTable (Request $request){


    setcookie("tableName",$_GET['tableNom']);

        $this->returnShowdata();

        $this->showData();

        return view('showColomns');


    }


    public function returnShowdata(){

        $host = $_COOKIE['host'];
        $user= $_COOKIE['user'];
        $mdp = $_COOKIE['mdp'];
        $database = $_COOKIE['database'];
        $tableName= $_COOKIE['tableName'];


        $conn  = new \mysqli($host, $user, $mdp, $database);


        $tableList = array();
        $res = mysqli_query($conn,"DESC $tableName");
        while($cRow = mysqli_fetch_array($res))
        {
            $tableList[] = $cRow[0];


        }

        $tabyy = $tableList ;
        return $tabyy;





    }


    public function showData(){

        $host = $_COOKIE['host'];
        $user= $_COOKIE['user'];
        $mdp = $_COOKIE['mdp'];
        $database = $_COOKIE['database'];
        $tableName= $_COOKIE['tableName'];

        $conn  = new \mysqli($host, $user, $mdp, $database);

        $tableList = array();


            $res = mysqli_query($conn,"Select * from $tableName");
            while($cRow = mysqli_fetch_object($res))
            {
                $tableList[] = $cRow;



            }

            $listval = $tableList  ;


        $tabyy = $listval ;
        return $tabyy;

    }





}
