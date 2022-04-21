import React, { useEffect, useState } from "react";
import './sass/style.scss';
import Main from "./components/Main";
import store from './app/store'
import { Provider } from 'react-redux'

const App = ()  => {
  return (
    <Provider store = {store} >
      <Main />
    </Provider>
  )
};

export default App;