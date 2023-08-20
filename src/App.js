import React from 'react'
import './App.css'
import Board from './components/board/Board'

const App = () => {
  return (
    <div>
      <div className='app'>
        <div className='app_navbar'>
          <h3>Display</h3>

        </div>
        <div className='app_outer'>
          <div className='app_board'>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
            <Board/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
