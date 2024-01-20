import SideMenu from './SideMenu';
import useWebSocket from 'react-use-websocket';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = "ws://websocket-service:8080";

import { useEffect } from 'react';
import GetRequest from '../../Helper/GetRequest'

function Home() {

    const URL = 'http://localhost:8000/?format=api';

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
                <h1 className='text-center'>Home</h1>
            </div>
        </div>
    )
}

export default Home