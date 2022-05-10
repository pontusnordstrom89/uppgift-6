import React from 'react'
import AddMovieForm from './MovieComponents/AddMovieForm'
import Movies from './MovieComponents/Movies'
import OrderByAlphaButton from './MovieComponents/OrderByAlphaButton'
import OrderByGradeButton from './MovieComponents/OrderByGradeButton'



export default function MovieApplication() {
  return (
    <div>
        

        <AddMovieForm/>
        <Movies/>
        <OrderByAlphaButton />
        <OrderByGradeButton /> 

    

    </div>



  )
}
