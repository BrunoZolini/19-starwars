const getPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await response.json();
  delete results.residents;
  return results.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return Number('-1');
    return 0;
  });
};

export default getPlanets;
