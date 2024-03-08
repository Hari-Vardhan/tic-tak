import React from 'react';

function Square(props) {
  return (
    <div onClick={props.onClick} className='square border-2 m-1 border-black p-10 text-l '>
      
      
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
