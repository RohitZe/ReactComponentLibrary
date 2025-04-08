
// import './App.css';
// import Layout from './Components/Layout';
// import Pagination from './Components/Pagination';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './State/store';
import NumberSelector from './Components/NumberSelector';
import ValueInput from './Components/ValueInput';
import {DisplayResults} from './Components/DisplayResult';
import './App.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <NumberSelector />
      <ValueInput/>
      <DisplayResults />
    </Provider>
    </>
  );
}

export default App;