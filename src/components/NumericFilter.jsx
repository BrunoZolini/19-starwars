import React, { useContext, useState, useEffect } from 'react';
import Context from '../context/myContext';

export default function NumericFilter() {
  const initialArray = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const { filters, setFilters } = useContext(Context);
  const [columnArrayFilter, setColumnArrayFilter] = useState(initialArray);
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  useEffect(() => {
    const newOptionsArray = initialArray.filter((columnItem) => (
      !filters.filterByNumericValues.some(({ column }) => column === columnItem)
    ));

    setColumnArrayFilter(newOptionsArray);
    setColumnFilter(newOptionsArray[0]);
    setComparisonFilter(comparisonFilter);
    setValueFilter(valueFilter);
  }, [filters]);

  const handleFilterButton = (e) => {
    e.preventDefault();

    const newFilter = {
      column: columnFilter,
      comparison: comparisonFilter,
      value: valueFilter,
    };

    setFilters({ ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, newFilter] });
  };

  return (
    <form>
      <label htmlFor="column-filter">
        Coluna
        <select
          data-testid="column-filter"
          id="column-filter"
          onChange={ ({ target: { value } }) => setColumnFilter(value) }
        >
          { columnArrayFilter
            .map((column) => <option key={ column } value={ column }>{column}</option>)}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        Operador
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          onChange={ ({ target: { value } }) => setComparisonFilter(value) }

        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        Valor
        <input
          data-testid="value-filter"
          type="number"
          id="value-filter"
          value={ valueFilter }
          onChange={ ({ target: { value } }) => setValueFilter(value) }
        />
      </label>

      <button
        data-testid="button-filter"
        type="submit"
        onClick={ handleFilterButton }
      >
        Filtrar
      </button>
    </form>
  );
}
