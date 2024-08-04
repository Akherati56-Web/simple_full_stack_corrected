import useWebSocket from 'react-use-websocket';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = "ws://localhost:8080";

import { useEffect } from 'react';
import GetRequest from '../services/DataBase/GetRequest'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/counterActions';

import { AppState } from '../reducers';
import FileUpload from '../Components/UploadFile';

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

    const count = useSelector((state: AppState) => state.counter.count);
    const dispatch = useDispatch();



    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="container mx-auto">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download</span>
                    </button>
                    <div className="blur-none ...">
                        <div className="border-b-2 border-indigo-600 ...">temp</div>
                    </div>
                    <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>
                    <h1 className='text-center'>Home</h1>
                    <br></br>
                    <div className="grid grid-flow-col justify-stretch text-center bg-amber-400 ">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                        <div>04</div>
                        <div>05</div>

                    </div>
                    test file upload
                    <FileUpload />

                    <div>
                        <h1>Count: {count}</h1>
                        <button onClick={handleIncrement} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increment</button>
                        <button onClick={handleDecrement} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrement</button>
                        <button >Green</button>



                    </div>
                    test2
                </div>


            </div>
        </div>
    )
}

export default Home