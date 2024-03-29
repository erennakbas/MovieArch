import React,{useState}  from 'react';
import styles from './index.module.css';
import Modal from '../Modal';
import Link from 'next/link'
import { useSelector} from 'react-redux';
const MovieList = () =>{
    const [show, setShow] = useState(false);
    const [activeMovie, setActiveMovie] = useState("");
    const movies = useSelector((state)=>state.movieList.movies);
    function handleDeleteTrigger(movie){
        setActiveMovie(movie);
        setShow(true);
    }
    return (
        <div className={styles.movielist__container}>
            {movies.map((movie,index)=> (
            <div className={styles.movie__container} key={index}>
                <img className={styles.img} src= {movie.poster_path} onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src="https://archive.org/download/no-photo-available/no-photo-available.png";}} alt="movie"/>
                <div className={styles.title_overview__wrapper}>
                    <div className={styles.title}><a href={"https://www.themoviedb.org/movie/453-a-beautiful-mind"}>{movie.title}</a></div>
                    <p className={styles.overview}>
                    {movie.overview}
                    </p>
                    <br/> <br/> <br/>
                </div>
                <div className={styles.buttons__flexrow}>
                    <button className={styles.delete__button} onClick={() => handleDeleteTrigger(movie)}>
                    Delete
                    </button>
                    <Link  href="/edit-movie/[id]" as={`/edit-movie/${movie.id}`}>
                        <button className={styles.edit__button} >
                        Edit
                        </button>
                    </Link>
                    <span className={styles.rate__span}>
                        {parseFloat(movie.vote_average).toFixed(1)}
                    </span>
                </div>
            </div>
            )
        )}
        <Modal show = {show} setShow = {setShow} activeMovie={activeMovie}/>
        </div>
    )
}


export default MovieList