import React from 'react';
import Movie from './Movie'
import OrderByGradeButton from './OrderByGradeButton';
import OrderByAlphaButton from './OrderByAlphaButton';
/**
  *  Creates <ul> to store movies from the movie list
   */
export default function Movies(props) { 
  
  
  return (
    <div>
        <h2>Inlagda filmer</h2>
          
        <ul className="list-group">
        
        {props.movieList.map(movie => <Movie key={movie.id} item={movie} deleteItem={props.deleteItem}  />)}
        </ul>

      <OrderByAlphaButton movies={props.movieList} setMovie={props.setMovie} />
      <OrderByGradeButton movies={props.movieList} setMovie={props.setMovie} />

    </div>
  )
}
