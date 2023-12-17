import SideMenu from './SideMenu';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <h1 className='text-center'>Home</h1>
                <SideMenu />
            </div>
        </div>
    )
}


export default Home