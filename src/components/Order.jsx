import React, { useState, useContext } from 'react';
import Context from '../context/myContext';

export default function Order() {
  const { filters, setFilters } = useContext(Context);
  const [order, setOrder] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const handleChangeOrder = ({ target: { value, name } }) => {
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleOrderButton = (e) => {
    e.preventDefault();

    setFilters({ ...filters, order });
  };

  return (
    <form>
      <label htmlFor="column-sort">
        Ordenar
        <select
          data-testid="column-sort"
          id="column-sort"
          name="column"
          onChange={ handleChangeOrder }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
      </label>

      <label htmlFor="sort" name="sort">
        <label htmlFor="ASC">
          <input
            type="radio"
            id="ASC"
            name="sort"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ handleChangeOrder }
            defaultChecked
          />
          Ascendente
        </label>

        <label htmlFor="DESC">
          <input
            type="radio"
            id="DESC"
            name="sort"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ handleChangeOrder }
          />
          Descendente
        </label>
      </label>
      <button
        type="submit"
        data-testid="column-sort-button"
        onClick={ handleOrderButton }
      >
        Ordenar
      </button>
    </form>
  );
}
