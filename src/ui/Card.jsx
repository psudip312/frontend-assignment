import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Card = ({ values }) => {
 const navigate=useNavigate();
 const handleClick=()=>{
  navigate(`/product/${values.id}`)
 }
  return (
    <>
      <div className="max-w-xs border shadow-2xl border-gray-200 rounded-lg ">
        <img
          class="h-48 bg-slate-600 w-full object-contain"
          src={values.image}
        />
        <div className="p-4">
          <h5 className="font-semibold h-14 overflow-hidden text-lg">{values.title}</h5>
          <p className="text-gray-700 h-24 overflow-hidden">{values.description}</p>
        </div>
        <button onClick={handleClick} className="px-3 py-2 rounded-2xl bg-slate-900 font-sans font-semibold text-white">
          Read More !
        </button>
      </div>
    </>
  );
};

export default Card;
