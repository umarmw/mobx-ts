import React from 'react';
import Search from './search';
import CityList from './city';
import StoreProvider from './context';
import './App.css';

const App: React.FC = () => (
  <StoreProvider>
    <div className="App">
      <header className="App-header">
        <Search />
        <CityList />
      </header>
    </div>
  </StoreProvider>
);

export default App;