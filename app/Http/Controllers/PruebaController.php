<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PruebaController extends Controller
{
  public function getGasoline()
  {
    $client = new \GuzzleHttp\Client();
    $response = $client->request('GET', 'https://api.datos.gob.mx/v1/precio.gasolina.publico')->getBody()->getContents();
    $response = json_decode($response);
    $response_complete = [
      'success' => true,
      'results' => $response->results,
    ];

    return response()->json($response_complete);
  }

  public function getGasolinePage(Request $request)
  {
    if(isset($request->page) && $request->page > 0){
      $url = 'https://api.datos.gob.mx/v1/precio.gasolina.publico?page='.$request->page;
    }
    $client = new \GuzzleHttp\Client();
    $response = $client->request('GET', 'https://api.datos.gob.mx/v1/precio.gasolina.publico')->getBody()->getContents();
    $response = json_decode($response);
    $response_complete = [
      'success' => true,
      'results' => $response->results,
    ];

    return response()->json($response_complete);
  }
}
