import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-slate-900">
      <div className="flex justify-center flex-wrap text-gray-500">
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">
            Company Info
          </li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">Legal</li>
          <li>About us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">Features</li>
          <li>Busniess Marketing</li>
          <li>User Analytic</li>
          <li>Live Chat</li>
          <li>Unlimted Support</li>
        </ul>
        <ul className="w-64 md:64 my-5 text-center text-lg">
          <li className="font-bold mb-2 text-green-600 text-xl">Resources</li>
          <li>IOS & Android</li>
          <li>Watch and Demo</li>
          <li>Custmors</li>
          <li>API</li>
        </ul>
      </div>
      <p className="pt-5 text-center text-white text-[16px] md:text-[20px]">
        Copyright 2023 &#169; Green
        <span className="text-green-600">Market</span>
      </p>
    </footer>
  );
};

export default Footer;
