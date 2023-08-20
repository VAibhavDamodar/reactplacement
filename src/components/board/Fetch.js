import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Fetch = () => {
  const [Data,setData] = useState('')
  const fetchData = async () => {
    await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment').then((res) =>setData(res.data.tickets))
  }
   useEffect(() => {
      fetchData()
   }, [])
  return (
    <div className='container'>fetch
    <div className='Data_fetch'>{ Data ? Data.map((items,index) => <><div className='container'><h5>{items.id}</h5>
    <p>{items.title}</p>
    <p>{items.tag}</p></div></>):'loading'}</div>
      
    </div>
  )
}

export default Fetch
