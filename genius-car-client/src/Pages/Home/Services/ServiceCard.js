import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure className="m-6">
        <img className=" rounded-lg" src={img} alt={title} />
      </figure>
      <div className="card-body mx-6">
        <h2 className="card-title font-bold text-2xl">{title}</h2>
        <div className="flex justify-center items-center">
          <p className="text-orange-600 font-semibold text-xl">
            Price : ${price}
          </p>
          <button className=" text-orange-600">
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
