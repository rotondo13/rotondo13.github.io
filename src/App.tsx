import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Kontakt from './components/Kontakt'
import Sidebar from './components/Sidebar'
import Projektmanagement from './components/Projektmanagement'
import { Link, Route, Routes, useMatch, useResolvedPath } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projektmanagement" element={<Projektmanagement />} />
          <Route path="Kontakt" element={<Kontakt />} />
        </Routes>
        
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="App-header">
        <div className="header-content">
          <Link to="/"><img src={logo} alt="logo" style={{height: "100px"}} /></Link>
          <ul>
            <li>0000000000000</li>
            <li>Straße Nr. - PLZ Ort</li>
          </ul>
        </div>
    </div>
  )
}

function Footer() {
  return (
    <div>
      <header className="App-footer">
          <div style={{width: "70vw", margin: "auto", padding: "5px"}}>
            <img src={logo} alt="logo" />
          </div>
      </header>
    </div>
  )
}

function CustomLink({ to, children, ...props }: {to: string, children: string}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  // console.log(resolvedPath)
  console.log(resolvedPath.pathname)
  console.log(isActive)

  return (
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}> {children} </Link>
      </li>
  )
}