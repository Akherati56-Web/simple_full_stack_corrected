import { useState, useEffect } from 'react';
import Cards from '../../Components/Cards';
import GetRequest from '../DataBase/GetRequest';

function FetchOrders() {
    const [posts, setPosts] = useState([]);
    const URL = '/api/orders/1';

    useEffect(() => {
        GetRequest(URL).then(response => {
            console.log('Data:', response!.data.data);
            setPosts(response!.data.data)
        }).catch(error => {
            console.error('Error:', error);
        });
    }, []);


    return (
        <div className='container-fluid'>
            <div className='row'>
                {posts && posts.map((item, key) => {
                    return (

                        <div className="max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={key}>

                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">

                                user = {item.user_id}</h5>

                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">id = {item.id}</p>

                        </div>
                    )
                })}

            </div>
        </div>
    );
}

export default FetchOrders;