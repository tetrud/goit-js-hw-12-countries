const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountries(nameCountry) {
  const url = `${BASE_URL}/${nameCountry}`;
  return fetch(url)
    .then(response => response.json())
}
export default fetchCountries;
