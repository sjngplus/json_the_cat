const breedtoSearch = process.argv[2];
if (!breedtoSearch) return console.log("Moew!! Please enter a Cat breed");
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedtoSearch}`, (error, response, body) => {
  if (error) return console.log('Meow!! request error:', error);
  console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body);
  if (body.length === 2) return console.log('Meow!! Breed not found');
  const data = JSON.parse(body);
  console.log(data[0].description);
});
