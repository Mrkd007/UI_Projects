import React from 'react'

const ScoreBox = ({player1, player2}) => {
  return (
    <div className='score-box'>
      <div className='score-box__player'>
        <span className='score-box__player-name'>{`${player1.name} / '${player1.value}' : ${player1.winVal}`}</span>
        <span className='score-box__player-name'>{`${player2.name} / '${player2.value}' : ${player2.winVal}`}</span>
      </div>
    </div>
  )
}

export default ScoreBox