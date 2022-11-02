import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { title, price } = service;
  const { user } = useContext(AuthContext);
  return (
    <div>
      <form>
        <h2 className="text-4xl text-center">
          You are about to order: {title}
        </h2>
        <h4 className="text-3xl">Price : ${price}</h4>
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
      </form>
      <textarea
        className="textarea textarea-bordered h-24 w-full"
        placeholder="Your Message"
      ></textarea>
    </div>
  );
};

export default Checkout;
