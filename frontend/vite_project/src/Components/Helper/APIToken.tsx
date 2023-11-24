import { useState, useEffect } from 'react';
import axios from 'axios';

function APIToken(){
    const token = 'gs7B2RX7gWRr1SQgQUmwynbfH48BCJb6Z8Zn284m2c1dc6d1'
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
