const {fetchBreedDescription} = require('./breedFetcher');

const breedtoSearch = process.argv[2];
if (!breedtoSearch) return console.log("Moew!! Please enter a Cat breed");

fetchBreedDescription(breedtoSearch, (error, desc) => {
  if (error) return console.log(error);
  console.log(desc);
});