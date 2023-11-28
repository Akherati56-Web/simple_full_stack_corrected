import $ from 'jquery';
import Cards from '../Helper/Cards';
import Post from '../../Helper/Post';
import API from '../../Helper/API';  
import SignUpForm from '../Helper/SignUpForm';
import LoginForm from '../Helper/LoginForm';

const api_token = localStorage.getItem('api-token')
console.log('api token is : ' + api_token);
function Content() {
return (

    <div className="col py-3">
        <h1>content</h1>
         
        <LoginForm/>
        <SignUpForm/>
        <API /> 
        <Post />
    </div>
)
}


export default Content
