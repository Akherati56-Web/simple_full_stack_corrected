import axios from 'axios';
const LoginApi = (formData) => {
  const baseURL = "/api/login";

  axios.post(baseURL, {
    email: formData.formData.email,
    password: formData.formData.password
  }).then((response) => {
    localStorage.setItem('api-token', response.data);
  });
}

export default LoginApi;