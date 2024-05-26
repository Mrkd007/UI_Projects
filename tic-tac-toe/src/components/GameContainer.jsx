import React, { useState } from 'react'
import ScoreBox from './ScoreBox'
import MatrixBox from './MatrixBox'

const GameContainer = () => {
  const defaultData = [
    {type: undefined, number:0, val: undefined},
    {type: undefined, number:1, val: undefined},
    {type: undefined, number:2, val: undefined},
    {type: undefined, number:3, val: undefined},
    {type: undefined, number:4, val: undefined},
    {type: undefined, number:5, val: undefined},
    {type: undefined, number:6, val: undefined},
    {type: undefined, number:7, val: undefined},
    {type: undefined, number:8, val: undefined},
  ]
  const [player1, setPlayer1] = useState({ name: 'First Player', value: '0', winVal: 0, inputArr: [] })
  const [player2, setPlayer2] = useState({ name: 'Second Player', value: 'X', winVal: 0, inputArr: [] })
  const [selectionObj, setSelectionObj] = useState(defaultData)
  const [alterVal, setAlterVal] = useState(true)
  const [winDeclared, setWinDeclared] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  const checkWinner = (cb) => {
    const winningArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    let returnVal = null;

    for(let i = 0; i < winningArr.length; i++) {
      const [a, b, c] = winningArr[i]
      if(selectionObj[a].type && selectionObj[b].type === selectionObj[a].type && selectionObj[c].type === selectionObj[a].type) {
        returnVal = selectionObj[a].type
      }
    }

    cb(returnVal)
  }

  const onSqareClick = (num) => {
    if(winDeclared)
      return;
    let selectedObj = selectionObj[num];
    let PlData = alterVal ? player1 : player2;
    if(!selectedObj.type) {
      selectedObj.val = num;
      PlData.inputArr.push(num);
      selectedObj.type = alterVal ? 'circle' : 'cross';
      if(alterVal) {
        setPlayer1(PlData)
      } else {
        setPlayer2(PlData)
      }
      checkWinner((winner) => {
        if(winner) {
          if(alterVal) {
            setPlayer1({ ...PlData, winVal: PlData.winVal + 1})
            setTimeout(() => alert('Player 1 Won !!!'), 100)
           setWinDeclared(true);
          } else {
            setPlayer2({ ...PlData, winVal: PlData.winVal + 1})
            setTimeout(() => alert('Player 2 Won !!!'), 100)
           setWinDeclared(true);
          }
        }
        if(selectionObj.every(elm => elm.type)) {
          setTimeout(() => alert('Game Draw !!!'), 10)
         setWinDeclared(true);
        }
        setAlterVal(!alterVal);
      })
    }
  }

  const resetData = () => {
    setSelectionObj(defaultData);
    setAlterVal(true);
    setWinDeclared(false);
  }

  return (
    <>
      <div className='game-container'>
        <span className='game-container__reload' onClick={() => {resetData()}}>&#x21bb;</span>
        <h1 className='game-container__title'>Tic-Tac-Toe</h1>
        <h5 className='game-container__subtitle'>The most played simple and clasic game</h5>
        <br/>
        <MatrixBox
          selectionObj={selectionObj}
          onSqareClick={onSqareClick}
        />
        <br/>
        <ScoreBox
          player1={player1}
          player2={player2}
        />
      </div>
      {showMessage &&
        <div></div>
      }
    </>
  )
}

export default GameContainer