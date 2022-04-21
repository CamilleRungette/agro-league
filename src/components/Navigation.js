import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
 import {Main, Movie} from "./_index"

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/movie" element={<Movie/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default Navigation;