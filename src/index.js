import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';

import propertyQuery from './js/markupCountry.js';

import refs from './js/refs.js';
const { searchInput } = refs;

//======================================

function onSearchCountry(event) {
  const searchQuery = event.target.value;

  fetchCountries(searchQuery).then(propertyQuery);
}

searchInput.addEventListener('input', debounce(onSearchCountry, 500));
