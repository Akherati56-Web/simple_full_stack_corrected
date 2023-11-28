import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../views/Helper/Cards';

function API() {
  const [posts, setPosts] = useState(null);
  const URL = 'http://localhost:8000/api/book';
  

  useEffect( () => {
    const fetchData = async() =>{
      const result = await fetch(URL)
      result.json().then(json => {
        const data = json.data.original
        console.log(data) 
        setPosts(data)
      })
    }
    fetchData();
  }, []);
  
  return (
    <ul className='row'> 
    {posts && posts.map((item, key)=>{
        return (
          <> 

          <Cards
          id = {item.id}
          />
          </>
        )
      }) }
      
    </ul>
  );
}

export default API;