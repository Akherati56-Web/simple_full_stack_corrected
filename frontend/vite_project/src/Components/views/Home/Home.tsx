import $ from 'jquery';
import SideMenu from './SideMenu';
import SendRequest from '../Login/SendRequest';
import { useState, useEffect } from 'react';



function Home() {
    useEffect(() => {
        SendRequest()
    }, []);
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideMenu />
                </div>
            </div>
        </>
    )
}


export default Home