import React from "react";
const productCard = ({ productDetails }) => {
  return (
    <>
    <div class="px-3 flex md:px-40 bg-red-500">
      <div class="w-1/2">
        <img class="    h-64 object-cover object-center rounded" src={productDetails?.image} />
      </div>
      <div class="w-1/2">
        <h1 className="uppercase text-gray-600 font-semibold">{productDetails?.category}</h1>
        <p class="text-3xl font-semibold ">{productDetails?.title}</p>
        <p className="font-gray-700 ">{productDetails?.description}</p>
        <p class=" text-xl font-semibold">${productDetails?.price}</p>
      </div>
    </div>
    </>
 
  );
};

export default productCard;
