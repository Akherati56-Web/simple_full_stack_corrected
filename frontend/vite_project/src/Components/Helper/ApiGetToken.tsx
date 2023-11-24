import { useState, useEffect } from 'react';
import axios from 'axios';

function ApiGetToken(props){
    const baseURL = "http://localhost:8000/api/login";

    axios.post(baseURL, {
      email: props.email,
      password: props.password
    }).then((response) => {
        console.log(response.data);
        localStorage.setItem('api-token', response.data);
      });
    return 'test' 
}

export default ApiGetToken;
