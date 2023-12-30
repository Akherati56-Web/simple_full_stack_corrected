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
            <div className='container'>
                <div className='row'>
                    <section className="col-sm-12 col-md-6 m-0 p-0">
                        <div className="card border-0 shadow-sm">
                            <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" className="img-fluid rounded-start-3 shadow-sm" />
                                <a href="#!">
                                    <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                                </a>
                            </div>

                        </div>
                    </section>

                    <div className='card col-sm-12 col-md-6 border-0 col m-0 p-0 '>
                        <div className='card border-0 shadow-lg rounded-end-4'>

                            <div className="card-body">
                                <h5 className="card-title font-weight-bold"><a>La Sirena restaurant</a></h5>
                                <ul className="list-unstyled list-inline mb-0">
                                    <li className="list-inline-item me-0">
                                        <i className="fas fa-star text-warning fa-xs"> </i>
                                    </li>
                                    <li className="list-inline-item me-0">
                                        <i className="fas fa-star text-warning fa-xs" />
                                    </li>
                                    <li className="list-inline-item me-0">
                                        <i className="fas fa-star text-warning fa-xs" />
                                    </li>
                                    <li className="list-inline-item me-0">
                                        <i className="fas fa-star text-warning fa-xs" />
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-star-half-alt text-warning fa-xs" />
                                    </li>
                                    <li className="list-inline-item">
                                        <p className="text-muted">4.5 (413)</p>
                                    </li>
                                </ul>
                                <p className="mb-2">$ • American, Restaurant</p>
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the
                                    card's content.
                                </p>
                                <hr className="my-4" />
                                <p className="lead"><strong>Tonight's availability</strong></p>
                                <ul className="list-unstyled list-inline d-flex justify-content-between">
                                    <li className="list-inline-item me-0">
                                        <div className="chip me-0">5:30PM</div>
                                    </li>
                                    <li className="list-inline-item me-0">
                                        <div className="chip bg-secondary text-white me-0">7:30PM</div>
                                    </li>
                                    <li className="list-inline-item me-0">
                                        <div className="chip me-0">8:00PM</div>
                                    </li>
                                    <li className="list-inline-item me-0">
                                        <div className="chip me-0">9:00PM</div>
                                    </li>
                                </ul>
                                <ul className="list-unstyled list-inline d-flex justify-content-between">
                                    <a>slug:</a>
                                </ul>
                                <ul className="list-unstyled list-inline d-flex justify-content-between">
                                    <li className='text-wrap' style={{ 'width': '15rem' }}>{data && data['slug']}</li>
                                    <li>
                                        <ul className='list-unstyled list-inline d-flex justify-content-between'>
                                            <li className="ps-4">25$</li>
                                            <li className="ps-4">2023-02-14</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SingleBook