import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'
import Login from './Login';

function Header() {
function handleClick(){
return alert($("button").text());
}
return (
<>

    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <form className="d-flex" role="search">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">
                    Login
                </button>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>

        <div className="modal fade" id="LoginModal" tabIndex={-1} aria-labelledby="LoginModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="LoginModalLabel">Login</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Login />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">SignUp</button>
                        <button type="button" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
   
</>
)
}


export default Header
