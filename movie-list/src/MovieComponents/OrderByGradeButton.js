import React from 'react';

/**
 * 
 * Button to order movie by grade
 * 
 */
export default function OrderByGradeButton(props) {

  const sortMovies = () => {
    let sortedMovies = props.movies.sort((a, b) => b.grade - a.grade);
    props.setMovie(Array.from(sortedMovies))
  }
  

  return (
    <button type="button" className="btn btn-primary" onClick={() => { sortMovies() }}>Sortera efter betyg</button>
  
    )
}
