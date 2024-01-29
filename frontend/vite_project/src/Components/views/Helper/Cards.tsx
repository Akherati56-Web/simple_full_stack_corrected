import { Link } from 'react-router-dom';

type Post = {
    slug: string;
};

interface CardPost {
    post: Post;
    key: number;
}

function Cards({ post, key }: CardPost) {
    return (
        <section className="mx-auto col-xs-12 col-md-6 col-xl-4 p-3" key={key}>
            <div className="card border-0 rounded-4 shadow-lg">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" className="img-fluid rounded-top-3 shadow-sm" />
                    <a href="#!">
                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }} />
                    </a>
                </div>
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
                        <li>
                            <Link to='/singlebook' state={{ slug: post.slug }} className="card-link text-decoration-none">
                                more ...
                            </Link>
                        </li>
                        <li>
                            <ul className='list-unstyled list-inline d-flex justify-content-between'>
                                <li className="ps-4">25$</li>
                                <li className="ps-4">2023-02-14</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cards


