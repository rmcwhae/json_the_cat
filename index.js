const fetchBreedDescription = require('./breedFetcher');
const givenBreed = process.argv[2];

fetchBreedDescription(givenBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});