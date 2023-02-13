// fetch with promise.
const fetch = require('node-fetch');

const apiURL = 'https://api.github.com/repos/eslint/eslint/contributors';

fetch(apiURL).then(
    response => {
        console.log(response);
    }
);