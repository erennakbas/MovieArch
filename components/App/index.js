import React, { useEffect } from "react";
import MovieList from "../MovieList";
import SearchBar from "../SearchBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovies } from "../../store/slices/movieSlice";

const App = () => {
  const dispatch = useDispatch();
  async function onMount() {
    const url = "http://localhost:3002/movies";
    const response = await axios.get(url);
    dispatch(setMovies(response.data));
  }
  useEffect(() => {
    onMount();
  }, []);
  return (
    <>
      <SearchBar />
      <MovieList />
    </>
  );
};

export default App;
