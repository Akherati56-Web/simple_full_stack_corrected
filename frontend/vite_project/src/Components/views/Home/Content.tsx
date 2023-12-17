import API from "../../Helper/API";

const api_token = localStorage.getItem("api-token");
console.log("api token is : " + api_token);

function Content() {
  return (
    <div className="col py-3">
      <h1>content</h1>
      <API />
    </div>
  )
}

export default Content;
