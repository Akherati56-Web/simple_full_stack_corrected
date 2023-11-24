import $ from 'jquery';
import Cards from '../Helper/Cards';
import Post from '../../Helper/Post';
import API from '../../Helper/API';
import APIToken from '../../Helper/APIToken';
import ApiGetToken from '../../Helper/ApiGetToken';

function Content() {
return (

    <div className="col py-3">
        <h1>content</h1>

        {/* <ApiGetToken /> */}
        <APIToken/>
        {/* <API />  */}
        {/* <Post /> */}
    </div>
)
}


export default Content
