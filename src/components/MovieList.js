import React from 'react'
import MovieAdd from './MovieAdd';
import MovieCard from './MovieCard';



function MovieList({movies,setMovies,text,rate}) {
  return (
    <div className='cards'>
       

       <MovieAdd movies={movies} setMovies={setMovies}/>
       
       {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating >= rate  ).map((el)=> (<MovieCard movie={el}/> )).reverse()}

    </div>
  )
}

export default MovieList