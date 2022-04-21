import { createSlice } from '@reduxjs/toolkit'

export const movie = createSlice({
  name: 'movie',
  initialState: {
    movie: {}
  },
  reducers: {
    addMovie: (state, infos) => {
      state.movie = infos.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addMovie } = movie.actions

export default movie.reducer