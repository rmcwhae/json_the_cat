const request = require('request');
let input = process.argv[2];


const felineFetch = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breed, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};


if (input) felineFetch(input);
