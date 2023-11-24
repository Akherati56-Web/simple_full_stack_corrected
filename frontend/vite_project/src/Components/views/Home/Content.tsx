import $ from 'jquery';
import Cards from '../Helper/Cards';
import Post from '../../Helper/Post';
import API from '../../Helper/API';
import APIToken from '../../Helper/APIToken';
import ApiGetToken from '../../Helper/ApiGetToken';

const api_token = localStorage.getItem('api-token')
console.log('api token is : ' + api_token);
function Content() {
return (

    <div className="col py-3">
        <h1>content</h1>
        
        <ApiGetToken 
        email = {"akherati@gmail.com"}
        password = {"123456"}
        />
        <APIToken/>
        {/* <API />  */}
        {/* <Post /> */}
    </div>
)
}


export default Content
