<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', function (){
    return view('connect');
});

Route::get('/Datatable',function (){
    return view('showTabl');
});

Route::get('/Datacolomns',function (){
    return view('showColomns');
});



Route::get('/connectdb','api\conData@connectdb');

Route::get('/desctTable','api\conData@descTable');

Route::get('/unsedb','api\conData@inse');

Route::get('/selectTable','api\conData@selectTable');

Route::get('/returnShowdata','api\conData@returnShowdata');




