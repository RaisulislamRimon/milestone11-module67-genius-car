import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title } = service;
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered input-ghost w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered input-ghost w-full"
        />
        <input
          type="text"
          placeholder="Your Phone"
          className="input input-bordered input-ghost w-full"
        />
        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered input-ghost w-full"
          defaultValue={user?.email}
          readOnly
        />
      </div>
    </div>
  );
};

export default Checkout;
