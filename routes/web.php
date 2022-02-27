<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', fn () => view('entry'));

$pages = [
  'personal-details',
  'notes',
  'activity',
  'trading-accounts',
  'documents'
];

Route::get('/{page}', fn () => view('entry'))->where('page', implode('|', $pages));
