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
    dd($response_complete);

  }
}
