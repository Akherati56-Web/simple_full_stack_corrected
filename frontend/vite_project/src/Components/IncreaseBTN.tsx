import { useDispatch } from 'react-redux';
import { decrement } from '../actions/counterActions';

interface DecreseBTNProps {
    count: number;
}

const IncreaseBTN: React.FC<DecreseBTNProps> = ({ count }) => {

    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    };


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="container mx-auto">
                    <div>
                        <h1>Count: {count}</h1>
                        <button onClick={handleDecrement} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Decrement</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncreaseBTN