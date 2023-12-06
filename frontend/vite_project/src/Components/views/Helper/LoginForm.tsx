import { useState } from 'react';
import axios from 'axios';
import config from '../../../config.json'

const LoginForm = () => {

  const [formData, setFormData] = useState({
    // Initialize form fields here
    // For example:
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseURL = config.server + "/api/login";
    const token = localStorage.getItem('api-token')


    console.log(token)

    if (token) {
      console.log('true')

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const bodyParameters = {
        key: "value"
      };

      axios.post(
        baseURL,
        bodyParameters,
        config
      ).then((response) => {
        console.log(response);
      }).catch(console.log);

    }
    else {
      console.log('false')
      axios.post(baseURL, {
        email: formData.email,
        password: formData.password
      }).then((response) => {
        localStorage.setItem('api-token', response.data);
      });

    }



  };

  return (
    <>
      <div className="modal fade" id="LoginModal" tabIndex={-1} aria-labelledby="LoginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="LoginModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd" className="form-label">Password:</label>
                  <input type="password" className="form-control" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;





