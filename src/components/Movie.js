import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Movie = () => {

  const thisMovie = useSelector(state => state.movie.movie)
  console.log(thisMovie);
  return (
    <div className='movie-main'>
      <Link to="/"><button className='button'>Go Back</button></Link>
      <h1>{thisMovie.Title} </h1>
      <div className='poster-desc'>
        <div>
          <img alt={thisMovie.Title} src={thisMovie.Poster} />
        </div>
        <div className='description'>
          <p><span className='bold'>Director: </span>{thisMovie.Director} </p>
          <p><span className='bold'>Year: </span>{thisMovie.Year} </p>
          <p><span className='bold'>Actors: </span>{thisMovie.Actors} </p>
          <p><span className='bold'>Genre: </span>{thisMovie.Genre} </p>
          <p><span className='bold'>Rated: </span>{thisMovie.Rated} </p>
          <span className='bold'>Ratings: </span>
            <ul className='no-list-style'>
            {thisMovie.Ratings.map(rating => (
              <li>{rating.Source} : {rating.Value} </li>
            ))}  
            </ul>  
          <p><span className='bold'>Description: </span>{thisMovie.Plot} </p>

        </div>
      </div>
    </div>
  )
}

export default Movie