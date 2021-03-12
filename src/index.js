import './styles.css';
import debounce from 'lodash.debounce';

import fetchCountries from './js/fetchCountries';
import propertyQuery from './js/markupCountry.js';
import refs from './js/refs.js';
const { searchInput } = refs;

//======================================

function onSearchCountry(event) {
  const searchQuery = event.target.value.trim();
  if (!searchQuery) return;

  fetchCountries(searchQuery)
    .then(propertyQuery)
    .catch(error => console.log(error));
}

searchInput.addEventListener('input', debounce(onSearchCountry, 500));
