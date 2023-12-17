import $ from 'jquery';
import { Link } from 'react-router-dom';

function Cards({ post, key }) {

    return (
        <div className="col-xs-12 col-xl-6" key={key}>
            <div className="card m-1" >
                <img src="..." className="card-img-top img-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title  </h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">An item</li>
                    <li className="list-group-item">A second item</li>
                    <li className="list-group-item">A third item</li>
                </ul>
                <div className="card-body">

                    <Link to='/singlebook' state={{ slug: post.slug }} className="card-link">
                        link
                    </Link>

                    <a href="#" className="card-link">
                        Another link
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Cards

