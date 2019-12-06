import React from 'react';
import Search from './search';
import CityList from './city';
import StoreProvider from './context';
import Button from './button';
import ProductContainer from './ProductContainer';
import './App.css';

const App: React.FC = () => {

  return(
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <Search />
          <CityList />
          <Button />
          <ProductContainer />
        </header>
      </div>
    </StoreProvider>
  );


}

export default App;