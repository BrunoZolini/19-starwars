import React from 'react';
import ActiveFilters from './ActiveFilters';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import Order from './Order';

export default function Filters() {
  return (
    <>
      <NameFilter />
      <NumericFilter />
      <Order />
      <ActiveFilters />
    </>
  );
}
