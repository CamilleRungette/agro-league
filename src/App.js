import React, { useEffect, useState } from "react";
import './sass/style.scss';
import axios from "axios";
import { Navbar } from "./components/_index";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const App = ()  => {

  const [searchedMovie, setSearchedMovie] = useState({
    title: "",
    year: ""
  });
  const [movie, setMovie] = useState({});

  const handleChange = (prop) => (e) => {
    setSearchedMovie({...searchedMovie, [prop]: e.target.value});
  };

  const searchMovie = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/search?title=${searchedMovie.title.replace(/ /g,"+")}&year=${searchedMovie.year}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <div className="app-main">
      <Navbar />

      <div className="form">
        <h1> Find your movie</h1>

          <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField 
            label="Movie title" 
            variant="outlined" 
            size="small" 
            onChange={handleChange('title')}
            />
          <TextField 
            label="Year" 
            variant="outlined" 
            size="small" 
            onChange={handleChange('year')}
            />

          <button className="search-button" onClick={searchMovie}>Search </button>
        </Box>

      </div>
      
    </div>
  );
}

export default App;
