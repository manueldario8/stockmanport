import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Navbar, Usernav } from './components/componentExports'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Usernav/>}>
            <Route path="/" element={<Dashboard />}>
            </Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App