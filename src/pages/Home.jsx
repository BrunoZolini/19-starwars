import React, { useContext, useEffect } from 'react';
import Filters from '../Components/Filters';
import Table from '../Components/Table';
import Context from '../context/myContext';
import getPlanets from '../service/api';

export default function Home() {
  const { setPlanets } = useContext(Context);

  useEffect(() => {
    const planetsApi = async () => {
      const apiReturn = await getPlanets();
      setPlanets(apiReturn);
    };
    planetsApi();
  }, [setPlanets]);

  return (
    <>
      <Filters />
      <Table />
    </>
  );
}
