import useWebSocket from 'react-use-websocket';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = "ws://localhost:8080";

import { useEffect } from 'react';
import GetRequest from '../services/DataBase/GetRequest'

// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../actions/counterActions';

// import { AppState } from '../reducers';


function Home() {

    const URL = 'http://localhost:8088/users/?format=api';

    useEffect(() => {
        GetRequest(URL).then(response => {
            console.log('Data:', response);
        }).catch(error => {
            console.error('Error:', error);
        });
    }, []);

    useWebSocket(WS_URL, {
        onOpen: () => {
            console.log('WebSocket connection established.');
        }
    });

    // const count = useSelector((state: AppState) => state.counter.count);
    // const dispatch = useDispatch();


    // const handleIncrement = () => {
    //     dispatch(increment());
    // };

    // const handleDecrement = () => {
    //     dispatch(decrement());
    // };


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="container mx-auto">
                    {/* <div>
                        <h1>Count: {count}</h1>
                        <button onClick={handleIncrement} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increment</button>
                        <button onClick={handleDecrement} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrement</button>
                        <button >Green</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Home