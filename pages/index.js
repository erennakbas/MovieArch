import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setMovies } from "../store/slices/movieSlice";

const index = () => {
  const dispatch = useDispatch();
  async function onMount() {
    const url = "http://localhost:3002/movies";
    const response = await axios.get(url);
    dispatch(setMovies(response.data));
  }
  useEffect(() => {
    onMount();
  }, []);
  return <div>
          <SearchBar/>
          <MovieList/>
        </div>;
};

export default index;
