import React, { useContext } from 'react';
import Context from '../context/myContext';

export default function ActiveFilters() {
  const { filters, setFilters } = useContext(Context);

  const handleDeleteFilter = (item) => {
    const newFilter = filters
      .filterByNumericValues.filter(({ column }) => item !== column);

    setFilters({ ...filters,
      filterByNumericValues: newFilter });
  };

  return (
    <div>
      {filters.filterByNumericValues.map(({ column, comparison, value }) => (
        <div
          key={ column }
          data-testid="filter"
        >
          <span>{`${column} | ${comparison} | ${value}`}</span>
          <button
            type="button"
            onClick={ () => handleDeleteFilter(column) }
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilters({ ...filters, filterByNumericValues: [] }) }
      >
        Remover Filtros
      </button>
    </div>
  );
}
