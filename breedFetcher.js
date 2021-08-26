const request = require('request');

const fetchBreedDescription = function(breed, callbackFunc) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {

    if (error) return callbackFunc(`Meow!! request error:, ${error}`, null);
    
    if (body.length === 2) return callbackFunc(`Meow!! Breed ${breed} does not exist`, null);

    // console.log('statusCode:', response && response.statusCode);

    const data = JSON.parse(body);

    callbackFunc(null, data[0].description);

  });

};

module.exports = {
  fetchBreedDescription
};

