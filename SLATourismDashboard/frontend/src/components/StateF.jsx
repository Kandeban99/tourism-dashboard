import React, { useState } from 'react'

function StateF() {

   const [color,setColor]=useState('red');
    // const color='red';

  return (
    <>
    <h1>my favouite color is {color}</h1>
    <button onClick={()=>(setColor('blue'))}>change color</button>
    </>
  )
}

export default StateF