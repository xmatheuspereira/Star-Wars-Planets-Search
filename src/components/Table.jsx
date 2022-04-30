import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

const Table = () => {
  const { planets } = useContext(PlanetsContext);

  const [selected, setSelected] = useState({
    value: '',
  });

  // filteredPlanets = (planets) => {

  // };

  return (
    <div>
      <header>
        <input
          type="text"
          data-testid="name-filter"
          value={ selected.value }
          onChange={ (event) => setSelected({ ...selected, value: event.target.value }) }
        />
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
          {planets.map((item, index) => (
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
