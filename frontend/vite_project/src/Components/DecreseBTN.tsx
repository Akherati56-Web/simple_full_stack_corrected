import { useDispatch } from 'react-redux';
import { increment } from '../actions/counterActions';

interface DecreseBTNProps {
    count: number;
}

const DecreseBTN: React.FC<DecreseBTNProps> = ({ count }) => {
    const dispatch = useDispatch();


    const handleIncrement = () => {
        dispatch(increment());
    };


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="container mx-auto">
                    <div>
                        <h1>Count: {count}</h1>
                        <button onClick={handleIncrement} className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Increment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DecreseBTN