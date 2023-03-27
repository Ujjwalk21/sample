import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import AverageScore from './components/AverageScore';
import {MyComponent} from './components/MyComponent'
import {Class} from './components/Class'

const App = () => {
  return (
  <>
  <nav>
    <ul>
      <li><Link to="/" >AverageScore</Link></li>
      <li><Link to="/Class">Class</Link></li>
      <li><Link to="/MyComponent">Team</Link></li>
    </ul>
  </nav>
  <Routes>
    <Route path= "/" element={<AverageScore />} />
    <Route path= "/MyComponent" element={< MyComponent /> } />
    <Route path= "/Class" element={<Class />} />
  </Routes>
  </>
  )
}

export default App