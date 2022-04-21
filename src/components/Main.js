import React, { useEffect, useState } from "react";
import '../sass/style.scss';
import axios from "axios";
import { Navbar } from "./_index";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { addMovie } from "../app/reducer";

const Main = ()  => {

  const thisMovie = useSelector(state => state.movie)
  const dispatch = useDispatch();

  console.log(thisMovie);

  const [searchedMovie, setSearchedMovie] = useState({
    title: "",
    year: ""
  });
  const [movie, setMovie] = useState();
  const [poster, setPoster] = useState({});


  useEffect(() => {
    axios.get("http://localhost:3000/search?title=Lord&year=2001&plot=")
    .then(res => {
      setPoster(res.data)
    })
  }, []);

  const handleChange = (prop) => (e) => {
    setSearchedMovie({...searchedMovie, [prop]: e.target.value});
  };

  const searchMovie = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3000/search?title=${searchedMovie.title.replace(/ /g,"+")}&year=${searchedMovie.year}&plot=full`)
    .then(res => {
      setMovie(res.data);
      dispatch(addMovie(res.data))
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <div className="app-main">
      <Navbar />

      <div className="show-movie">
        <h1> Agro-League Movies</h1>
        <div className="preview">
          <div className="api-presentation">
            <p className="subtitle"> The Open Movie Database</p>
            <p className="presentation"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className="poster">
            <img src={poster?.Poster} alt={poster.Title} />
            <div>
              <h3 className="title">{poster.Title}</h3>
              <p>{poster.Plot} </p>
            </div>

          </div>
        </div>
      </div>
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

          <button className="button" onClick={searchMovie}>Search </button>
        </Box>

      </div>

        {movie && 
          <div className="movie">
            <h2>{movie.Title} ({movie.Year}) </h2>
            <p className="description"> {movie.Plot} </p>
            <button className="button">See more </button>
          </div>
        }
    </div>
  );
}

export default Main;