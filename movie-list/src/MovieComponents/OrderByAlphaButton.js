import React from 'react'

/**
 * 
 * Button to order movies in alphabetical order
 * 
 */
export default function OrderByAlphaButton(props) {

  const sortMovies = () => {

    function compare(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    let sortedMovies = props.movies.sort(compare);

    props.setMovie(Array.from(sortedMovies))
  }
  return (
    <button type="button" className="btn btn-primary" onClick={() => { sortMovies() }}>Sortera efter alfabetiskt</button>
  )
}
