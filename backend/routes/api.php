<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function () {

    $controller = 'AuthController';

    Route::post('login', $controller . '@login');
    Route::post('register', $controller . '@register');
    Route::post('logout', $controller . '@logout');

    Route::group(['prefix' => 'reset-password'], function () {

        $controller = 'PasswordResetController';
    
        Route::get('find/{token}', $controller . '@find');
        Route::post('create', $controller . '@create');
        Route::post('reset', $controller . '@reset');
    
    }); 

});
