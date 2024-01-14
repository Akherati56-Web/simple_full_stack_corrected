import SideMenu from './SideMenu';

import useWebSocket from 'react-use-websocket';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = 'wss://websocket-service:8080';


function Home() {
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