import React from 'react'

/**
 * 
 * Creates <li> element for each movie and adds <img> a star based on grade 1-5
 */
export default function Movie(props) {

  const star = <img width="28" className = "float-end" src={require('./star.png')} alt="star"/>
  
 
  return (
    
    <li className="list-group-item">
      {props.item.title}
    
      <button className="btn btn-sm btn-danger float-end" onClick={() => { props.deleteItem(props.item.id) }}>X</button>

      {[...Array(parseInt(props.item.grade))].map((img, i) => <span key={props.item.id + "img" + i}>{star}</span>)}
    </li>
  )
}


 