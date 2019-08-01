const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      let breed = data[0];
      if (breed) {
        callback(null, data[0].description);        
      } else {
        callback(null, 'Breed "' + breedName + '" not found');
      }
    }
      
  });
};



module.exports = fetchBreedDescription;