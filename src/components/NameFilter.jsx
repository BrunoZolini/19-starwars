import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/myContext';

export default function NameFilter() {
  const { filters, setFilters } = useContext(Context);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    setFilters({ ...filters, filterByName });
  }, [filterByName, setFilters]);

  return (
    <label htmlFor="filterByName">
      Filter By Name
      <input
        data-testid="name-filter"
        type="text"
        id="filterByName"
        onChange={ ({ target: { value } }) => setFilterByName(value) }
      />
    </label>
  );
}
