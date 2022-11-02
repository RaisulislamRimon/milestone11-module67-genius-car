import React from "react";

const OrderRow = ({ order }) => {
  const { serviceName, customer, email, phone, message, price } = order;
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
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm opacity-50">{message}</div>
          </div>
        </div>
      </td>
      <td>
        {customer}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{phone}</td>
      <th>
        <button className="btn btn-ghost btn-xs">${price}</button>
      </th>
    </tr>
  );
};

export default OrderRow;
