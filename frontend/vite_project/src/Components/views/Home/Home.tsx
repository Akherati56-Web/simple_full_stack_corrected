import useWebSocket from 'react-use-websocket';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = "ws://localhost:8080";

import { useEffect } from 'react';
import GetRequest from '../../Helper/GetRequest'

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


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="container mx-auto">
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
                    </div>


                </div>


            </div>
        </div>
    )
}

export default Home