import React from "react";

const Review = () => {
  return (
    <section className="py-[50px] bg-stone-50">
      <h1 className="text-center text-slate-900 text-[25px] md:text-[35px] font-bold">
        Customers Review
      </h1>
      <div className="flex flex-wrap justify-center gap-[20px] mt-[50px]">
        <div className="w-[275px] text-center shadow-lg rounded-lg p-3 hover:translate-x-[-10px] hover:translate-y-[-15px] duration-500 bg-white">
          <i className="fa-solid fa-user text-white bg-green-600 rounded-full text-[25px] w-[50px] h-[50px] flex items-center justify-center mx-auto"></i>
          <h2 className="font-bold text-[20px] my-2">JOHN DOE</h2>
          <p className="text-gray-400 italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nulla
            voluptas facere quam sequi animi! Reprehenderit, maiores porro?
            Pariatur non cumque necessitatibus quisquam eos eaque corporis
            corrupti fugiat expedita nam!
          </p>
        </div>
        <div className="w-[275px] text-center shadow-lg rounded-lg p-3 hover:translate-x-[-10px] hover:translate-y-[-15px] duration-500 bg-white">
          <i className="fa-solid fa-user text-white bg-green-600 rounded-full text-[25px] w-[50px] h-[50px] flex items-center justify-center mx-auto"></i>
          <h2 className="font-bold text-[20px] my-2">JOHN DOE</h2>
          <p className="text-gray-400 italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nulla
            voluptas facere quam sequi animi! Reprehenderit, maiores porro?
            Pariatur non cumque necessitatibus quisquam eos eaque corporis
            corrupti fugiat expedita nam!
          </p>
        </div>
        <div className="w-[275px] text-center shadow-lg rounded-lg p-3 hover:translate-x-[-10px] hover:translate-y-[-15px] duration-500 bg-white">
          <i className="fa-solid fa-user text-white bg-green-600 rounded-full text-[25px] w-[50px] h-[50px] flex items-center justify-center mx-auto"></i>
          <h2 className="font-bold text-[20px] my-2">JOHN DOE</h2>
          <p className="text-gray-400 italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A nulla
            voluptas facere quam sequi animi! Reprehenderit, maiores porro?
            Pariatur non cumque necessitatibus quisquam eos eaque corporis
            corrupti fugiat expedita nam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
