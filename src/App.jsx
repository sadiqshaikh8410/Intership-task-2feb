import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/Style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { Formdemo1 } from './Components/Formdemo1'
import { Formdemo2 } from './Components/Formdemo2'
import { Formdemo3 } from './Components/Formdemo3'
import { Formdemo4 } from './Components/Formdemo4'
import { Team1 } from './Components/Team1'
import { Team2 } from './Components/Team2'
import { Team3 } from './Components/Team3'
import { Team4 } from './Components/Team4'
import Navbar from './Components/Navbar'
import { Apidemo1 } from './Components/Api/Apidemo1'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     
     <BrowserRouter >
     <Navbar />
        <Routes>
          <Route path="/" element={<Apidemo1 />} />
          <Route path="/mapdemo1" element={<Mapdemo1 />} />
          <Route path="/mapdemo2" element={<Mapdemo2 />} />
          <Route path="/mapdemo3" element={<Mapdemo3 />} />
          <Route path="/mapdemo4" element={<Mapdemo4 />} />
          <Route path="/mapdemo5" element={<Mapdemo5 />} />
          <Route path="/mapdemo6" element={<Mapdemo6 />} />
          <Route path="/mapdemo7" element={<Mapdemo7 />} />
          <Route path="/mapdemo8" element={<Mapdemo8 />} />
          <Route path="/mapdemo9" element={<Mapdemo9 />} />
          <Route path="/mapdemo10" element={<Mapdemo10 />} />
          <Route path="/Formdemo1" element={<Formdemo1 />} />
          <Route path="/Formdemo2" element={<Formdemo2 />} />
          <Route path="/Formdemo3" element={<Formdemo3 />} />
          <Route path="/Formdemo4" element={<Formdemo4 />} />
          <Route path="/Team1" element={<Team1 />} />
          <Route path="/Team2" element={<Team2 />} />
          <Route path="/Team3" element={<Team3 />} />
          <Route path="/Team4" element={<Team4 />} />
          
        </Routes>

        </BrowserRouter>

    



    </>
  )
}

export default App
