import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const productCard = ({ productDetails }) => {
  const [isFavorite, setFavorite] = useState(false);
  const navigate = useNavigate();
  const handleReturnHome = () => {
    navigate("/");
  };


  //function to handleFavourite
  const handleCart = (meta) => {
    if (isFavorite) {
      // Remove from favorites
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      const updatedFavorites = favorites.filter((item) => item.id !== meta.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorite(false);
    } else {
      // Add to favorites
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      // get lekhnu ko karan path
      const updatedFavorites = [...favorites, meta];

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorite(true);
    }
  };
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
              <div
                onClick={() => handleCart(productDetails)}
                className={`favorite-button ${
                  isFavorite ? "favorite-active" : ""
                }`}
              >
                {isFavorite ? <AiFillHeart size={26}/> : <AiOutlineHeart size={26} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default productCard;
