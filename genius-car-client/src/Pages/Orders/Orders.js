import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState({});

  // const url = `http://localhost:5000/orders?email=${user.email}`;

  useEffect(() => {
    // fetch(url)
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.log(error));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-4xl">You have {orders.length} orders</h2>
    </div>
  );
};

export default Orders;
