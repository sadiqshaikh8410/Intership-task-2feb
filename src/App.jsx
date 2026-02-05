import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Mapdemo1 } from './Components/Mapdemo1'
import { Mapdemo2 } from './Components/Mapdemo2'
import { Mapdemo3 } from './Components/Mapdemo3'
import { Mapdemo4 } from './Components/Mapdemo4'
import { Mapdemo5 } from './Components/Mapdemo5'
import { Mapdemo6 } from './Components/Mapdemo6'
import { Mapdemo7 } from './Components/Mapdemo7'
import { Mapdemo8 } from './Components/Mapdemo8'
import { Mapdemo9 } from './Components/Mapdemo9'
import { Mapdemo10 } from './Components/Mapdemo10'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mapdemo1 />
      <hr />
      <Mapdemo2 />
      <hr />
      <Mapdemo3 />
      <hr />
      <Mapdemo4 />
      <hr />
      <Mapdemo5 />
      <hr />
      <Mapdemo6 />
      <hr />
      <Mapdemo7 />
      <hr />
      <Mapdemo8 />
      <hr />
      <Mapdemo9 />
      <hr />
      <Mapdemo10 />
    </>
  )
}

export default App
