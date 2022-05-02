import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { planets } = useContext(PlanetsContext);

  const [selected, setSelected] = useState({
    name: '',
    value: 0,
    column: 'population',
    comparasion: 'maior que',
  });

  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
  }, [selectedFilters]);

  const getFilteredPlanets = (row) => {
    const filteredPlanets = [];

    selectedFilters.forEach((filter) => {
      switch (filter.comparasion) {
      case 'maior que':
        filteredPlanets.push(Number(row[filter.column]) > Number(filter.value));
        break;

      case 'menor que':
        filteredPlanets.push(Number(row[filter.column]) < Number(filter.value));
        break;

      case 'igual a':
        filteredPlanets.push(Number(row[filter.column]) === Number(filter.value));
        break;

      default:
        return true;
      }
    });

    return filteredPlanets.every((element) => element);
  };

  return (
    <div>
      <header>
        <input
          type="text"
          data-testid="name-filter"
          value={ selected.name }
          onChange={ (event) => setSelected({ ...selected, name: event.target.value }) }
        />
        <select
          data-testid="column-filter"
          value={ selected.column }
          onChange={ (event) => setSelected({ ...selected, column: event.target.value }) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          value={ selected.comparasion }
          onChange={
            (event) => setSelected({ ...selected, comparasion: event.target.value })
          }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="number"
          value={ selected.value }
          onChange={ (event) => setSelected({ ...selected, value: event.target.value }) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setSelectedFilters([...selectedFilters, selected]);
          } }
        >
          Filtrar
        </button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planets
            .filter(({ name }) => name.toLowerCase().includes(selected.name))
            .filter(getFilteredPlanets)
            .map((item, index) => (
              <tr key={ index }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
