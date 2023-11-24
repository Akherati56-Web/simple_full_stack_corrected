import { useState, useEffect } from 'react';
import axios from 'axios';

function APIToken(){
    const token = localStorage.getItem('api-token');
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const bodyParameters = {
       key: "value"
    };
    
    axios.post( 
      'http://localhost:8000/api/test',
      bodyParameters,
      config
    ).then(console.log).catch(console.log);
  return 'test'
}

export default APIToken;
