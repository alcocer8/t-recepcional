<?php

namespace App\Http\Controllers;

use App\Models\Profesor;
use Illuminate\Http\Request;

class ProfesorController extends Controller
{
    public function index(){
         return response()->json(["profesores" =>  Profesor::all()]);
    }
}
