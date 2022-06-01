import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Greeting from './Greeting';

const App = () => (
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Welcome Topaz</h1>} />
      <Route exact path="" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
</Provider>
);

export default App
