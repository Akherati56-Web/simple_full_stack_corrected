import axios from 'axios';

const SignUpApi = (formData) => {
    const baseURL = "/api/signup";

    axios.post(baseURL, {
        email: formData.formData.email,
        password: formData.formData.password
    }).then((response) => {
        console.log(response.data);
    });
}

export default SignUpApi;