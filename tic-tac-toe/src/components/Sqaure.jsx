import React from 'react'

const Sqaure = ({selectionObj, onSqareClick}) => {
  console.log(selectionObj, selectionObj?.val, selectionObj?.number)
  return (
    <div className='square-box' onClick={() => {onSqareClick(selectionObj?.number)}}>
      { (selectionObj?.val !== undefined && (selectionObj?.val === selectionObj?.number)) &&
        <>
          {(selectionObj?.type === 'circle') ?
            <span className='square-box__circle'></span>
            :
            <>
              <span className='square-box__cross square-box__cross-left'></span>
              <span className='square-box__cross square-box__cross-right'></span>
            </>
          }
        </>
      }
    </div>
  )
}

export default Sqaure