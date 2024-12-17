import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Button from '@mui/material/Button';


if(import.meta.env.DEV){
  axios.defaults.baseURL=`http://localhost:${import.meta.env.VITE_PORT}`
} else{
  axios.defaults.baseURL= location.origin;
}

function App() {
  const [data, setData] = useState({})
 useEffect(()=>{
  (async ()=>{
    let res = await axios.get("/data");
    setData(res.data)
  })()
 },[])
  return (
    <>
    <div className='main'>
    <div className='sub'> 
    <h1 className='what'>I AM A HACKER </h1>
    <p className='super'>your phone is hacked</p>
    </div>
  
    <div className='hacked'>
    <h1 className='text'>{data.msg}</h1>
    <Button variant="contained">click to escape</Button>
    </div>
    </div>
    </>
  )
}

export default App
