import axios from 'axios';

interface FormData {
  email: string;
  password: string;
}

const LoginApi = (formData: FormData) => {
  console.log(typeof formData)
  const baseURL = "/api/login";

  axios.post(baseURL, {
    email: formData.email,
    password: formData.password
  }).then((response) => {
    localStorage.setItem('api-token', response.data);
  });
}

export default LoginApi;