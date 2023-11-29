import { useState, useEffect } from 'react';
import axios from 'axios';

function Post() {
  axios.post("http://localhost:8000/api/book", {
    name: 'test'
  })
    .then((response) => {
      console.log(response);
    });
  return ''
}

export default Post;