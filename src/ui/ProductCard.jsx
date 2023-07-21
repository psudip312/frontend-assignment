import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const productCard = ({ productDetails }) => {
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/");
  };
  const handleCart=(productDetails.id)=>{
    //convert of selected product into a Json String
    const productJsonStirng=JSON.stringify(productDetails);
    localStorage.setItem("cart items",productDetails)
  }
  return (
    <>
      <button
        onClick={handleReturnHome}
        className="px-4 py-2 text-white font-semibold bg-slate-900 rounded-md"
      >
        Return Home
      </button>
      <div className="px-5 py-24 bg-gray-300">
        <div class="px-3 flex flex-col md:flex-row items-center md:px-40 ">
          <div class="w-1/2">
            <img
              class="lg:w-1/2 w-full lg:h-auto h-72 object-cover object-center rounded"
              src={productDetails?.image}
            />
          </div>
          <div class="w-1/2">
            <h1 className="uppercase text-gray-600 mb-4 font-semibold">
              {productDetails?.category}
            </h1>
            <p class="text-3xl font-semibold mb-8 ">{productDetails?.title}</p>
            <p className="font-gray-700 mb-4 ">{productDetails?.description}</p>
            <div class="flex justify-between">
              <p class=" text-xl font-semibold">
                Price:${productDetails?.price}
              </p>
              <div onClick={()=>handleCart(productDetails.id)}className="flex cursor-pointer">
                Add to Cart:
                <AiOutlineHeart size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productCard;
