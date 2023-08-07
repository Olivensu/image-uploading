import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Grid from './Component/Grid'
import axios from 'axios'

function App() {
  const [photos, setPhotos] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/api/get`)
    .then((res)=>{
      console.log(res.data);
      setPhotos(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  return (
    <>
      <Navbar></Navbar>
      <Grid photos={photos}></Grid>
    </>
  )
}

export default App
