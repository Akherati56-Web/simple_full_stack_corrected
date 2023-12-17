import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SingleBook() {
    const location = useLocation()

    const [data, setdata] = useState(null);
    const slug_id = location.state.slug
    const URL = '/api/book/' + slug_id;

    useEffect(() => {
        console.log(URL)
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                const data = json.data
                console.log(data)
                setdata(data)
            })
        }
        fetchData();
    }, []);

    return (
        <>
            SingleBook
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">slug </h4>
                    <p className="card-text">{data && data['slug']}</p>
                </div>
            </div>
        </>
    )
}


export default SingleBook