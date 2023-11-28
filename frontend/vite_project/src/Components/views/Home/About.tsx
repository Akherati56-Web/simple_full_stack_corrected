import $ from 'jquery';
import Content from './Content';
import SideMenu from './SideMenu';
 
import Header from '../Helper/header';
import Footer from '../Helper/Footer';

function About() {
    return (
        <> 

        <Header />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                <SideMenu/>
                <Content/>
                
                

                </div> 
            </div>

        <Footer/>
        </>
    )
}


export default About