import { useEffect } from 'react';
import io from 'socket.io-client';

const WebSocket = () => {
    useEffect(() => {
        console.log('1')
        const socket = io('http://localhost/ws');

        // Handle WebSocket events
        socket.on('tesing', (data) => {
            console.log('Received data:', data);
        });
        console.log('2')

        return () => {
            // Close the WebSocket connection when the component unmounts
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            {
                <>
                    test
                </>
            }
        </div>
    );
};

export default WebSocket;