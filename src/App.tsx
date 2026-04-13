import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard, Navbar, Usernav, ProviderPage, CategoryPage } from './components/componentExports'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Usernav/>}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/providers" element={<ProviderPage />}></Route>
            <Route path="/categories" element={<CategoryPage />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App