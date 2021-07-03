@extends('layouts/layout')

@section('content')
  <div id="gazolina">
  </div>

  <script>
    var response = {!! json_encode($response_complete ?? '')!!}
    console.log(response);
  </script>
@endsection
