import $ from 'jquery';
import Content from './Content';
import SideMenu from './SideMenu';



function Header() {
    return (
        <> 
        <div className="container-fluid">
            <div className="row flex-nowrap">
            <SideMenu/>
            <Content/>
            
            
            </div> 
        </div>
        </>
    )
}


export default Header