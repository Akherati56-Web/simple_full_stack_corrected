import $ from 'jquery';
import SideMenu from './SideMenu';
import SendRequest from '../Login/SendRequest';
import { useState, useEffect } from 'react';

import WebSocket from '../../websocket/WebSocket';

function Home() {

    useEffect(() => {
        const userIsLoggedIn = SendRequest()
        console.log(userIsLoggedIn)



    }, []);

    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideMenu />
                    <WebSocket />
                </div>
            </div>
        </>
    )
}


export default Home