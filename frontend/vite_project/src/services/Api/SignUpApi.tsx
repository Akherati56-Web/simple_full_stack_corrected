import axios from 'axios';

interface FormData {
    email: string;
    password: string;
}

const SignUpApi = (formData: FormData) => {
    const baseURL = "/api/signup";

    axios.post(baseURL, {
        email: formData.email,
        password: formData.password
    }).then((response) => {
        console.log(response.data);
    });
}

export default SignUpApi;