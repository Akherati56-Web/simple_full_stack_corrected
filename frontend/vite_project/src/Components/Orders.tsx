import FetchOrders from "../services/Api/FetchOrders";

const api_token = localStorage.getItem("api-token");
console.log("api token is : " + api_token);

function Orders() {
    return (
        <div className="col py-3">
            {/* <FetchBooks /> */}
            <FetchOrders />

        </div>
    )
}

export default Orders;
