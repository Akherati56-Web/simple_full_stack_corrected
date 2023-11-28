import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js' 

function Header() { 
return (
<>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <form className="d-flex" role="search">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginModal">
                    Login
                </button>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SignUp">
                    SignUp
                </button>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>

        
    </nav>
   
</>
)
}


export default Header
