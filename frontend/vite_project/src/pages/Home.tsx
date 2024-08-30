import useWebSocket from 'react-use-websocket';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = "ws://localhost:8080";

import { useEffect } from 'react';
import GetRequest from '../services/DataBase/GetRequest'
// import IncreaseBTN from '../Components/IncreaseBTN';
// import { DocumentCurrencyBangladeshiIcon } from '@heroicons/react/16/solid';
// import DecreseBTN from '../Components/DecreseBTN';
// import { AppState } from '../reducers';
// import { useSelector } from 'react-redux';


function Home() {
    // const count = useSelector((state: AppState) => state.counter.count);
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
                    <div>
                        {/* <IncreaseBTN count={count} />
                        <DecreseBTN count={count} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home