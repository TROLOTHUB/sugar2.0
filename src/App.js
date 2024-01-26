import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewPage from './registerpage.js';
import CreateAccountPage from './CreateAccountPage';
import SearchPage from './SearchPage.js';
import './registerpage.css';

const Home = () => {
  return (
    <div>
      <h1>Bienvenido a la página de inicio</h1>
      {/* Otros elementos de tu página de inicio van aquí */}
    </div>
  );
};

// Crear un componente que incluya el encabezado y el componente Home
const HomeWithHeader = () => {
  return (
    <>
      <header className="App-header">
        <Link to="/newpage">
          <img src="/logo.png" className="App-logo" alt="logo" />
        </Link>
      </header>
      <Home />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        {/* Las Rutas determinarán qué componente se renderiza */}
        <Routes>
          <Route path="/newpage" element={<NewPage />} />
          <Route path="create-account" element={<CreateAccountPage />} />
          <Route path="/" element={<HomeWithHeader />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
