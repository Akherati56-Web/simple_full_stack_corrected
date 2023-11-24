import { useState, useEffect } from 'react';
import axios from 'axios';

function ApiGetToken(){
    const baseURL = "http://localhost:8000/api/tokens/create";

    axios.post(baseURL).then((response) => {
        console.log(response.data);
      });
    return 'test' 
}

export default ApiGetToken;
