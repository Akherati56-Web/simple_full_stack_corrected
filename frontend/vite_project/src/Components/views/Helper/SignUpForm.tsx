import { useState } from 'react';
import axios from 'axios';  

const SignUpForm = () => {
 
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
    const baseURL = "http://localhost:8000/api/signup";

    axios.post(baseURL, {
        email: formData.email,
        password: formData.password
        }).then((response) => {
            console.log(response.data);
        }); 
  };

  return (
        <>
          <div className="modal fade" id="SignUp" tabIndex={-1} aria-labelledby="SignUpModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="SignUpModalLabel">SignUP</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                      </label>
                      <br />
                      <label>
                        Password:
                        <input type="password" name="password" value={formData.password} onChange={handleChange} />
                      </label>
                      <br />
                      <button type="submit">Submit</button>
                    </form> 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">SignUp</button>
                        <button type="button" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
          </div>
        </>
      );
};

export default SignUpForm; 