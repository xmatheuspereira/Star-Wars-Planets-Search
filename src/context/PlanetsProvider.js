import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import StarWarsAPI from '../API/StarWarsAPI';

const PlanetsProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function getPlanets() {
      const data = await StarWarsAPI();
      setPlanets(data.results);
    }
    getPlanets();
  }, []);

  const planetsData = {
    planets,
  };

  return (
    <PlanetsContext.Provider value={ planetsData }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
