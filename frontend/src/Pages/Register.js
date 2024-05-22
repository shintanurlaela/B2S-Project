import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    nama_user: '',
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set role to "siswa" before sending data to the server
      const dataToSend = { ...formData, role: 'siswa' };
      const response = await axios.post('http://localhost:5000/user/save', dataToSend);
      if (response.data.status) {
        // Redirect to login page after successful registration
        window.location.href = '/';
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="h-100 d-flex align-items-center justify-content-center" style={{marginTop: "55px"}}>
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-1">
                {/* <img src="asset/LarasLogo.png" width="200" alt="Logo" /> */}
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                  {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="nama">Name</label>
                    <input
                      type="text"
                      name="nama_user"
                      value={formData.nama_user} 
                      onChange={handleChange}
                      className="form-control"
                      required
                      autoFocus
                    />
                    <div className="invalid-feedback">Name is required</div>
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="username">NIS</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                    <div className="invalid-feedback">NIS is invalid</div>
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                    <div className="invalid-feedback">Password is required</div>
                  </div>
                  <div className="align-items-center d-flex">
                    <button type="submit" className="btn btn-primary ms-auto">
                      Register
                    </button>
                  </div>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Already have an account? <a href="/" className="text-dark">Login</a>
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

export default Register;
