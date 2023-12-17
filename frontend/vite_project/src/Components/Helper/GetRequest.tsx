import { useState, useEffect } from 'react';
import axios from 'axios';

async function GetRequest() {
  const URL = '/api/book';
  let getdata = null

  try {
    let response = await axios.get(URL)
    getdata = response
  } catch (error) {
    console.error(`ERROR: ${error}`)
  }
  return getdata
}

export default GetRequest;