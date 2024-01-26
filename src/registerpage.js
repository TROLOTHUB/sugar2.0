import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import './App.css';

const RegisterPage = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // Nuevo estado para el registro exitoso

  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para manejar el inicio de sesión
  const handleLogin = (e) => {
    e.preventDefault();
    // Implementa aquí la lógica de inicio de sesión
    console.log("Login:", { role, email, password });

    // Simula un inicio de sesión exitoso
    // Deberías reemplazar esto con una validación real y una llamada a la API
    if (email === "elliot.mora@greenwisefinancial.com" && password === "12345678") {
      // Si el inicio de sesión es exitoso, redirige a SearchPage
      navigate('/search');
    } else {
      // Manejo de error de inicio de sesión
      alert('Credenciales de inicio de sesión incorrectas.');
    }
  };

  // Función para manejar el registro
  const handleRegister = (e) => {
    e.preventDefault();
    // Implementa aquí la lógica de registro
    // Si el rol es admin y la contraseña es correcta, registra el usuario
    if (role === 'admin' && adminPassword === '12345678') {
      console.log("Registro:", { role, email, password });
      // Aquí llamarías a una API para registrar al usuario, por ejemplo.
      // Si el registro es exitoso, establece el estado para mostrar el mensaje
      setRegistrationSuccess(true);
    } else {
      alert('Contraseña de administrador incorrecta o campos incompletos.');
    }
  };

  // Redirecciona a la nueva página después de un registro exitoso
  useEffect(() => {
    if (registrationSuccess) {
      // Espera un segundo antes de redirigir
      setTimeout(() => navigate('/search'), 1000); // Utiliza la función navigate aquí
    }
  }, [registrationSuccess, navigate]);

  // Muestra el formulario de registro
  const showRegisterForm = () => {
    setIsRegistering(true);
  };

  // Muestra el formulario de inicio de sesión
  const showLoginForm = () => {
    setIsRegistering(false);
  };

  return (
    <div className="registerpage-header">
      {/* ... */}
      {registrationSuccess ? (
        <div>Registro exitoso</div>
      ) : (
      <div className="register-container">
        {isRegistering ? (
          <form onSubmit={handleRegister}>
            <div>
              <label htmlFor="role">Rol:</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Selecciona un rol</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Correo:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {role === 'admin' && (
              <div>
                <label htmlFor="adminPassword">Contraseña Admin:</label>
                <input
                  type="password"
                  id="adminPassword"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit">Registrarse</button>
            <button type="button" onClick={showLoginForm}>Ya tengo una cuenta</button>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="role">Rol:</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="">Selecciona un rol</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div>
              <label htmlFor="email">Correo:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit">Login</button>
              <button type="button" onClick={showRegisterForm}>Registrarse</button>
            </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
