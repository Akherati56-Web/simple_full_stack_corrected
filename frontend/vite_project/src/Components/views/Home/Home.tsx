import useWebSocket from 'react-use-websocket';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = "ws://localhost:8080";

import { useEffect } from 'react';
import GetRequest from '../../Helper/GetRequest'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../../actions/counterActions';
import { AppState } from '../../../reducers';

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


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="container mx-auto">
                    <button class="tw-bg-gray-300 tw-hover:tw-bg-gray-400 tw-text-gray-800 tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-inline-flex tw-items-center">
                        <svg class="tw-fill-current tw-w-4 tw-h-4 tw-mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download</span>
                    </button>
                    <div className="blur-none ...">
                        <div className="tw-border-b-2 tw-border-indigo-600 ...">temp</div>
                    </div>
                    <h1 className="tw-text-3xl tw-font-bold tw-underline tw-text-center">Hello world!</h1>
                    <h1 className='tw-text-center'>Home</h1>
                    <br></br>
                    <div className="tw-grid tw-grid-flow-col tw-justify-stretch tw-text-center tw-bg-amber-400 ">
                        <div>01</div>
                        <div>02</div>
                        <div>03</div>
                        <div>04</div>
                        <div>05</div>

                    </div>
                    test

                    <div>
                        <h1>Count: {count}</h1>
                        <button onClick={() => dispatch(increment())} >Increment</button>
                        <button onClick={() => dispatch(decrement())}>Decrement</button>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Home