import Orders from "../Components/Orders"
import ThemeSwitcher from "../Components/ThemeSwitcher";
import FileUpload from '../Components/UploadFile';


function DashBoard() {
    return (
        <>
            <h1 className='text-center'>DashBoard Home</h1>
            <Orders />
            <FileUpload />
            <ThemeSwitcher />
        </>
    )
}
export default DashBoard