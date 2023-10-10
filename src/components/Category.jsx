import data from "../api/data";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../app/cartSlice";
import React, { useEffect, useState } from "react";

const Category = () => {
  const location = useLocation();
  const [load, setLoad] = useState(false);
  const [categories, setCategory] = useState();
  const selected = location.pathname.substring(1);
  useEffect(() => {
    setCategory(data[selected]);
    setLoad(true);
  }, [selected]);
  const dispatch = useDispatch();

  return (
    <section className="w-full lg:w-[1000px] pt-[90px] pb-[30px] mx-auto flex flex-wrap justify-center gap-[30px]">
      {load ? (
        categories.map((e, index) =>
          e.image_url ? (
            <div
              key={index}
              className="w-[300px] overflow-hidden rounded-lg shadow-lg pb-3"
            >
              <img src={e.image_url} className="w-[300px] h-[200px]" />
              <h2 className="text-center w-[90%] mx-auto">{e.name}</h2>
              <p className="text-center font-bold py-2">{e.price} $</p>
              <button
                onClick={() => dispatch(addToCart(e))}
                className="w-[180px] h-[30px] mx-auto block bg-green-600 text-[18px] text-white rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ) : null
        )
      ) : (
        <div className="h-screen text-[30px] flex justify-center items-center mt-[-90px]">
          No Items here...
        </div>
      )}
    </section>
  );
};

export default Category;
