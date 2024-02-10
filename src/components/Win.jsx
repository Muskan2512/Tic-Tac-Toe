import React from 'react'

export default function Win(props) {
  let resetBtn=props.reset;
  // console.log(resetBtn)
  return (
    <div style={{display:'flex',flexDirection:"column",width:"fit-content",margin:"auto",color:"white",fontSize:"1.5rem"}}>
      <p style={{textAlign:"center",fontWeight:"600"}}>{props.isWon} Won</p>
      <button onClick={resetBtn}>Play Again</button>
    </div>
  )
}
