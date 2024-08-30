import { Outlet } from "react-router-dom";
// import 'bootstrap/dist/js/bootstrap.min.js'
import Footer from '../Components/Footer';
import Navbar from './Navbar'
import SignUpForm from '../Components/SignUpForm';
import LoginForm from '../Components/LoginForm';

const Layout = () => {
  return (
    <>
      <Navbar />

      <div style={{}}>
        <LoginForm />
        <SignUpForm />
        <Outlet />
      </div>

      <Footer />
    </>
  )
};

export default Layout;


