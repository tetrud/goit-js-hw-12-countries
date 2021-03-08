import messageError from './pnotify.js';

import listCountryTpl from '../template/search-country.hbs';
import countryCardTpl from '../template/country.hbs';

import refs from './refs.js';
const { list } = refs;

//======================================

function propertyQuery(countries) {
  if (!countries) return;

  if (countries.length > 2 && countries.length <= 10) {
    createListCountries(countries);
  }

  if (countries.length === 1) {
    createCardCountries(countries);
  }
  if (countries.length > 10) {
    messageError('Too many matches found. Please enter a more specific query!');
  }
  if (countries.status === 404) {
    messageError('Incorrect input');
  }
}

function createListCountries(data) {
  const listMurkup = listCountryTpl(data);
  list.innerHTML = listMurkup;
}

function createCardCountries(data) {
  const murkup = countryCardTpl(data);
  list.innerHTML = murkup;
}

export default propertyQuery;
