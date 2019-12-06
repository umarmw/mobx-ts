import React from 'react';
import { useObserver } from 'mobx-react-lite';
import { storeContext } from './context';
import { useRootData } from './hook';

export const CityView: React.FC<{ cities: string[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map(city => <li>{city}</li>)}
    </ul>
  );
}

export const CityList = () => {
  const cities = useRootData(store => store.filteredCities);
  return <CityView cities={cities} />
}

export default CityList;