import React from 'react'

const Square = (props) => {
  

  let state=props.state;

 

  return (
    <div className='square' onClick={props.onclick}>
    {state[props.index]}


    </div>
  )
}

export default Square
