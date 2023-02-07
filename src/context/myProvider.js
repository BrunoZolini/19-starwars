import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filters, setFilters] = useState({ filterByNumericValues: [],
    order: {
      column: '',
      sort: '',
    } });

  const planetsArrayFiltered = () => planets.filter((planet) => (
    !filters.filterByNumericValues.length ? true
      : filters.filterByNumericValues.every(({ column, comparison, value }) => {
        switch (comparison) {
        case 'maior que':
          return Number(planet[column]) > Number(value);
        case 'menor que':
          return Number(planet[column]) < Number(value);
        default:
          return Number(planet[column]) === Number(value);
        }
      })
  )).filter(({ name }) => (
    name.toLowerCase().includes((filters.filterByName).toLowerCase())));

  const orderPlanetsArray = () => planetsArrayFiltered().sort((a, b) => {
    if (a[filters.order.column] === 'unknown') return 1;
    if (b[filters.order.column] === 'unknown') return Number('-1');
    if (filters.order.sort === 'ASC') {
      return a[filters.order.column] - b[filters.order.column];
    }
    return b[filters.order.column] - a[filters.order.column];
  });

  return (
    <MyContext.Provider
      value={ {
        planets,
        setPlanets,
        filters,
        setFilters,
        orderPlanetsArray,
      } }
    >
      {children}
    </MyContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;
