import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  // const url = `http://localhost:5000/orders?email=${user.email}`;

  useEffect(() => {
    // fetch(url)
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((error) => console.log(error));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-4xl">You have {orders?.length} orders</h2>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <OrderRow key={order._id} order={order} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
