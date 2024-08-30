import useWebSocket from 'react-use-websocket';
import AIUploadFile from '../Components/AIUploadFile ';
// const WS_URL = 'ws://websocket-service:8080';
const WS_URL = "ws://localhost:8080";

function AI() {
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
                        AI

                        <AIUploadFile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AI