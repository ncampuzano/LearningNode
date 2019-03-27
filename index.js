// Using express;
// import expressV from 'express';
var express = require('express');
var httpClient = require('request');
var app = express();

app.get('/myfavorite', function(request, response) {
  httpClient('https://pokeapi.co/api/v2/pokemon/59/', function(error, res) {
    var pokemon = JSON.parse(res.body);
    response.send(pokemon.name);
  });
});

app.get('/getPokemon', function(request, response) {
  var pokemonId = request.query.pokemonId;
  httpClient(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`, function(error, res) {
    if (res.statusCode == 404) {
      response.send('Este pokemon no existe');
    } else {
      var pokemon = JSON.parse(res.body);
      response.send(pokemon.name);
    } 
    
  });
});

app.listen(8000);