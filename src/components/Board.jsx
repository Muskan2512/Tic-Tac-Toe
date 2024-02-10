import React from 'react'
import Square from './Square'
import { useState } from 'react';
import Win from './Win';

const Board = () => {

  //initialize the state array will null.
  let [state, setState] = useState(Array(9).fill(null));
  //initially it will be X's turn
  let [isXturn, setIsXTurn] = useState(true);
  let [isWon,setisWon]=useState(null)

 function handleClick(index) {
    console.log("clicked"+index)
    let newArr = [...state];
    if (newArr[index] !== null) return;
    newArr[index] = isXturn ? "X" : "O";
    setState(newArr)
    setIsXTurn(!isXturn);
    // console.log(newArr);
    let win=CheckWin();

  }


  function CheckWin() {
    const winList = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let row of winList) {
      let [a,b,c]=row;
      if(state[a]!=null && state[a]===state[b] && state[b]===state[c]){
        console.log(state[a] +" won")
        setisWon(state[a]);
      }
    }
  }
  function reset(){
    let newarr=Array(9).fill(null)
    setisWon(null);
    setState(newarr);
    setIsXTurn(true);
    console.log("clicked");
  }
  return (

    <>
      {
        isWon?<Win isWon={isWon} reset={()=>{reset()}}/>:
        <div className='board'>
      <div className="row">
        <Square index="0" state={state} isXturn={isXturn} onclick={()=>{handleClick(0)}}/>
        <Square index="1" state={state} isXturn={isXturn} onclick={()=>{handleClick(1)}}/>
        <Square index="2" state={state} isXturn={isXturn} onclick={()=>{handleClick(2)}}/>
      </div>
      <div className="row">
        <Square index="3" state={state} isXturn={isXturn} onclick={()=>{handleClick(3)}}/>
        <Square index="4" state={state} isXturn={isXturn} onclick={()=>{handleClick(4)}}/>
        <Square index="5" state={state} isXturn={isXturn} onclick={()=>{handleClick(5)}}/>
      </div>
      <div className="row">
        <Square index="6" state={state} isXturn={isXturn} onclick={()=>{handleClick(6)}}/>
        <Square index="7" state={state} isXturn={isXturn} onclick={()=>{handleClick(7)}}/>
        <Square index="8" state={state} isXturn={isXturn} onclick={()=>{handleClick(8)}}/>
      </div>

      <div className="button">
        <button  onClick={reset}>Reset Game</button>
      </div>
    </div>
      }
    </>

    
  )
}

export default Board
