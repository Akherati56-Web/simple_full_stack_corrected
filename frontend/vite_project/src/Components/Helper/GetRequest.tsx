import { useState, useEffect } from 'react';


function GetRequest() {
  const URL = '/api/book';
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(data => {
        console.log(data)
        return data
      })
    }
    fetchData();
  }, []);
}

export default GetRequest;