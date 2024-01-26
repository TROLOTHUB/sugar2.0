import React, { useState } from 'react';
import './searchpage.css'; // Asegúrate de que el camino al archivo CSS es correcto

const SearchPage = () => {
  const [searchParams, setSearchParams] = useState({
    fieldID: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    social: '',
    office: '',
  });

  const [activeTab, setActiveTab] = useState('newLead'); // Estado para controlar la pestaña activa

  // Función para manejar el cambio de pestaña
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí manejarías la búsqueda con los parámetros
    console.log(searchParams);
  };

  return (
    <div className="searchpage-wrapper">
      <header className="searchpage-header">
        <img src="/logo.png" className="App-logosearch" alt="logo" />
      </header>
      <div className="searchpage-main">
        <aside className="searchpage-sidebar">
          <button onClick={() => handleTabClick('newLead')} className={activeTab === 'newLead' ? 'active' : ''}>
            <div className="sidebar-icon icon-plus"></div>
            <span className="sidebar-text">New Lead</span>
          </button>
          <button onClick={() => handleTabClick('search')} className={activeTab === 'search' ? 'active' : ''}>
            <div className="sidebar-icon icon-search"></div>
            <span className="sidebar-text">Search</span>
          </button>
          <button onClick={() => handleTabClick('myRequest')} className={activeTab === 'myRequest' ? 'active' : ''}>
            <div className="sidebar-icon icon-request"></div>
            <span className="sidebar-text">My Request</span>
          </button>
        </aside>
        <main className="searchpage-main-content">
          {activeTab === 'search' && (
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                name="fileID"
                placeholder="File ID"
                value={searchParams.fileID}
                onChange={handleChange}
              />
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={searchParams.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={searchParams.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={searchParams.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={searchParams.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="social"
                placeholder="Social"
                value={searchParams.social}
                onChange={handleChange}
              />
              <button type="submit">Search</button>
            </form>
          )}
        </main>
      </div>
      <footer className="searchpage-footer">
        <p>GreenWise Financial © All Rights Reserved. Leadsconnection, Inc. 2024 (Version 0.5 | Build 6.0)</p>
        <p>This Software is protected by United States copyright and intellectual property laws as well as international intellectual property laws and treaties.</p>
      </footer>
    </div>
  );
};

export default SearchPage;

