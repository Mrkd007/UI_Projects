import React from 'react'
import Sqaure from './Sqaure'

const MatrixBox = ({selectionObj, onSqareClick}) => {
  return (
    <div className='matrix-box'>
      <div className="matrix-box__row">
        <Sqaure selectionObj={selectionObj[0]} onSqareClick={onSqareClick} />
        <Sqaure selectionObj={selectionObj[1]} onSqareClick={onSqareClick} />
        <Sqaure selectionObj={selectionObj[2]} onSqareClick={onSqareClick} />
      </div>
      <div className="matrix-box__row">
        <Sqaure selectionObj={selectionObj[3]} onSqareClick={onSqareClick} />
        <Sqaure selectionObj={selectionObj[4]} onSqareClick={onSqareClick} />
        <Sqaure selectionObj={selectionObj[5]} onSqareClick={onSqareClick} />
      </div>
      <div className="matrix-box__row">
        <Sqaure selectionObj={selectionObj[6]} onSqareClick={onSqareClick} />
        <Sqaure selectionObj={selectionObj[7]} onSqareClick={onSqareClick} />
        <Sqaure selectionObj={selectionObj[8]} onSqareClick={onSqareClick} />
      </div>
    </div>
  )
}

export default MatrixBox