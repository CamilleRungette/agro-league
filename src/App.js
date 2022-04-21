import React from "react";
import './sass/style.scss';
import Navigation from "./components/Navigation";
import Navbar from "./components/Navbar";
import store from './app/store'
import { Provider } from 'react-redux'

const App = ()  => {
  return (
    <Provider store = {store} >
      <Navbar />
      <Navigation />
    </Provider>
  )
};

export default App;