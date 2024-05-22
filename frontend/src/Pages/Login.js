import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ setIsLoggedIn, setRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    if (loginSuccess) {
      // Mengarahkan pengguna ke halaman sesuai dengan peran (role) mereka
      const role = localStorage.getItem('role');
      if (role === 'admin') {
        return <Navigate to="/homeadmin" />;
      } else if (role === 'siswa') {
        return <Navigate to="/homesiswa" />;
      }
    }
  }, [loginSuccess]);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: username,
        password: password,
      });
      if (response.data.status) {
        const { role } = response.data;
        localStorage.setItem('role', role);
        setRole(role);
        setIsLoggedIn(true);
        setLoginSuccess(true);
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
      window.alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <section className="h-100 d-flex align-items-center justify-content-center" style={{marginTop: "55px"}}>
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-1">
                {/* <img src="asset/LarasLogo.png" alt="Logo" width="200" /> */}
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display error message if it exists */}
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="username">NIS</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="form-control"
                      required
                      autoFocus
                    />
                    <div className="invalid-feedback">NIS is invalid</div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">Password</label>
                    </div>
                    <div className="input-group">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </div>
                    <div className="invalid-feedback">Password is required</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <button type="submit" className="btn btn-primary ms-auto">Login</button>
                  </div>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    {/* Menggunakan Link ke halaman register */}
                    Don't have an account? <Link to="/register" className="text-dark">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Login;
