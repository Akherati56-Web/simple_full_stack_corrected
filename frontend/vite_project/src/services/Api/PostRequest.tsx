import axios from 'axios';

const PostRequest = (baseURL = "/api/test") => {
    const token = localStorage.getItem('api-token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    axios.post(
        baseURL,
        config
    ).then((response) => {
        console.log(response);
    }).catch(() => {
        console.log
    });
}
export default PostRequest;