const request = require('request');
let input = process.argv[2];


const felineFetch = function(query) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + query, (error, response, body) => {
    if (error) {
      return console.log('Request failed: ', error);
    }
    const data = JSON.parse(body);
    let breed = data[0];
    if (breed) {
      console.log(data[0].description);
    } else {
      console.log('Breed "' + query + '" not found');
    }
      
  });
};


if (input) felineFetch(input);
