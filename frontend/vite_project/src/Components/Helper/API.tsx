import { useState, useEffect } from 'react';
import Cards from '../views/Helper/Cards';
import config from '../../config.json'


function API() {
  const [posts, setPosts] = useState(null);
  console.log(config.server)
  const URL = config.server + '/api/book';


  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        const data = json.data.original.data
        console.log(data)
        setPosts(data)
      })
    }
    fetchData();
  }, []);

  return (
    <ul className='row'>
      {posts && posts.map((item, key) => {
        return (
          <>
            <Cards
              key={item.id}
              post={item}

            />
          </>
        )
      })}

    </ul>
  );
}

export default API;