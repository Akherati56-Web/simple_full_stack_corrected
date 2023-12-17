import { useState, useEffect } from 'react';
import Cards from './Cards';
import GetRequest from '../../Helper/GetRequest'


function FetchBooks() {
    const [posts, setPosts] = useState([]);
    const URL = '/api/book';
    const data = GetRequest()

    useEffect(() => {
        setPosts(data)
    }, []);

    return (
        <ul className='row'>
            {posts && posts.map((item, key) => {
                return (
                    <Cards
                        post={item}
                        key={key} />
                )
            })}

        </ul>
    );
}

export default FetchBooks;