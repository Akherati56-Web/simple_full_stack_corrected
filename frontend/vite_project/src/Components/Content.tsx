import FetchBooks from "../services/Api/FetchBooks";

const api_token = localStorage.getItem("api-token");
console.log("api token is : " + api_token);

function Content() {
  return (
    <div className="col py-3">
      <FetchBooks />
    </div>
  )
}

export default Content;
