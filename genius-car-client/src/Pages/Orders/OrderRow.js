import React, { useEffect, useState } from "react";

const OrderRow = ({ order }) => {
  const { serviceName, service, customer, email, phone, message, price } =
    order;

  const [orderService, setOrderService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((response) => response.json())
      .then((data) => setOrderService(data));
  }, [service]);

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              {orderService?.img && (
                <img
                  src={orderService?.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">${price}</span>
      </td>
      <td>{phone}</td>
      <th>
        <button className="btn btn-ghost btn-xs">${price}</button>
      </th>
    </tr>
  );
};

export default OrderRow;
