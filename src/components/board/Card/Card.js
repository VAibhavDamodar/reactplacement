import React from 'react'
import './Card.css'
import { MoreHorizontal, } from 'react-feather'
import Fetch from '../Fetch'

const Card = () => {
 
   
    

  return (
    <div className='card' >
        <div className='card_top'>
            <div className='card_label'></div>
            <MoreHorizontal/>
        </div>
        <Fetch/>
      
    </div>
  )
}

export default Card
