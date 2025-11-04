import { Routes,Route,Navigate,useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Archive } from './pages/Archive'
import { Important } from './pages/Important'
import { Bin } from './pages/Bin'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // when the app loads, always navigate to home
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/important' element={<Important/>}/>
      <Route path='/bin' element={<Bin/>}/>
      {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
    </Routes>
  )
}

export default App
