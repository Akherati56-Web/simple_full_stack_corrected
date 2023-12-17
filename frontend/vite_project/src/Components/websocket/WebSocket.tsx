import { useEffect } from 'react';
import io from 'socket.io-client';

const WebSocket = () => {
    useEffect(() => {
        const socket = io('http://localhost/ws');

        socket.emit('data')
        // Handle WebSocket events
        socket.on('testing', (data) => {
            console.log('Received data:', data);
        });

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