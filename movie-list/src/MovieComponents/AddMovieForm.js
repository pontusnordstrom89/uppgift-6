import React, { useState, useRef } from 'react';
import SaveMoviesButton from './SaveMoviesButton'


export default function AddMovieForm() {
    const [movie, setMovie] = useState([{
        id: 1,
        title: "First Item",
        grade: 1
    }]);
    const inputRef = useRef();

    function addItem(event) {
        if (event.keyCode  === 13) {
            const newId = movie.length > 0 ? movie[movie.length - 1].id + 1 : 1;
            setMovie([...movie, {
                id: newId,
                title: inputRef.current.value,
            }])

            inputRef.current.value = "";
        }
    }

  return (
    <div>
        <h3>Lägg till en film</h3>
        <form>
            <label className = 'form-label' >
                Titel:
                <input type="text" name="titel" className='form-control' />
                Betyg:
                <select className ='form-select'>
                    <option selected>Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
            </label>
           
            <input type="submit" value="Submit" className='form-control' onClick ={addItem} />
            </form>
          

        <SaveMoviesButton /> 
    </div>
  )
}
