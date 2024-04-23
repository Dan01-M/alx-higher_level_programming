#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    try {
      const todos = JSON.parse(body);

      const completed = {};

      todos.forEach((todo) => {
        if (todo.completed) {
          if (completed[todo.userId] === undefined) {
            completed[todo.userId] = 1;
          } else {
            completed[todo.userId]++;
          }
        }
      });

      const output = `{${Object.entries(completed).map(([key, value]) => ` '${key}': ${value}`).join(',\n ')} }`;

      console.log(Object.keys(completed).length > 2 ? output : completed);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  } else {
    console.error('Error:', error);
  }
});


0x14-javascript-web_scraping/100-starwars_characters.js

#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);

    console.log(`Characters of "${movieData.title}":`);

    movieData.characters.forEach((characterUrl) => {
      request(characterUrl, function (charError, charResponse, charBody) {
        if (!charError && charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);

          console.log(characterData.name);
        } else {
          console.error('Error fetching character data:', charError);
        }
      });
    });
  } else {
    console.error('Error fetching movie data:', error);
  }
});
