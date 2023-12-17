import FetchBooks from "../Helper/FetchBooks";

const api_token = localStorage.getItem("api-token");
console.log("api token is : " + api_token);

function Content() {
  return (
    <div className="col py-3">
      <h1 className='text-center'>Content</h1>
      <FetchBooks />
    </div>
  )
}

export default Content;
