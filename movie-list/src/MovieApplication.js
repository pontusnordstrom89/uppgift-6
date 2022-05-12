import React, { useState, useRef} from 'react';
import Movies from './MovieComponents/Movies';


export default function MovieApplication() {

  // movies array
  const [movies, setMovie] = useState([]);

  const inputRef = useRef();
  const gradeRef = useRef();


  /**
   *  Handle form submit
  */ 
  function handleSubmit(event) {

    event.preventDefault()

    // Check if fields have input
    if (inputRef.current.value.length === 0 || gradeRef.current.value === "0") {
      // Alert user
      alert('Du måste fylla i film och titel')
    } else {

      // If yes, append object
      let newId;
      if (movies.length === 0) {
        newId = 0;
      } else {
        newId = movies.length;
      }
      
      // Set movie
      setMovie([...movies, {
        id: newId,
        title: inputRef.current.value,
        grade: gradeRef.current.value
      }])

      // Set input fields to default
      inputRef.current.value = "";
      gradeRef.current.value = "0";

      
    }
 
  }

  /**
   * Function to delete an item
   * @param {Item id} id 
   */

  function deleteItem(id) {
    setMovie(movies.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h3>Lägg till en film</h3>
      <form onSubmit={handleSubmit}>
        <label className='form-label' >
          Titel:
        </label>
        <input type="text" name="titel" ref={inputRef} className='form-control' />

        Betyg:
        <select className='form-select' ref={gradeRef} defaultValue="0">
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input className ="btn btn-success mt-1" type="submit" value="Lägg till film" />
      </form>

      <Movies movieList={movies} setMovie={setMovie} deleteItem={deleteItem}/>

    </div>

    
  )
}
