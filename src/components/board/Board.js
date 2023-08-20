import React, { useState } from 'react'
import './Board.css'
import { MoreHorizontal, Plus } from 'react-feather'
import Card from './Card/Card'
import menu from './Api.js'


const Board = () => {
    const [menuData , setMenuData]= useState(menu)
    console.log(menuData)
  return (
    <div className='board'>
        <div className='board_top'>
            <p className='board_top_title'>TO Do <span>2</span></p>
            <Plus/>
            <MoreHorizontal/>
            
            
        </div>
        <div className='board_cards'>
            
            <Card menuData={menuData}/>
        </div>
       
    </div>
  )
}

export default Board
