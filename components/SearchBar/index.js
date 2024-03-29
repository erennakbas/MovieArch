import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import styles from "./index.module.css";
import Link from "next/link";
import {useDispatch } from "react-redux";
import axios from "axios";
import { setMovies } from "../../store/slices/movieSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery,setDebouncedQuery] = useDebounce(searchQuery, 400);
  function updateSearchQuery(event) {
    setSearchQuery(event.target.value);
  }
  async function updateMovies() {
    const res = await axios.get(
      `http://localhost:3002/movies?title_like=${debouncedQuery}`
    );
    const movies = await res.data;
    dispatch(setMovies(movies));
  }
  useEffect(() => {
    updateMovies();
  }, [debouncedQuery]);
  return (
    <form onSubmit={(event) => event.preventDefault()} className="mb-3">
      <div className={styles.container}>
        <div className={styles.search__sign}>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          onChange={updateSearchQuery}
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search a movie"
          required
        />
        <Link href="/add-movie">
          <button type="submit" className={styles.button__add}>
            Add new movie
          </button>
        </Link>
      </div>
    </form>
  );
}
