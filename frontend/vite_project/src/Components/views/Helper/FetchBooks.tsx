import { useState, useEffect } from 'react';
import Cards from './Cards';
import GetRequest from '../../Helper/GetRequest'

function FetchBooks() {
    const [posts, setPosts] = useState([]);
    const URL = '/api/book';

    useEffect(() => {
        GetRequest().then(data => {
            console.log('Data:', data);
            setPosts(data)
        }).catch(error => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                {posts && posts.map((item, key) => {
                    return (
                        <Cards
                            post={item}
                            key={key} />
                    )
                })}

            </div>
        </div>
    );
}

export default FetchBooks;