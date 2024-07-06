// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Styles/Pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-zinc-900">
      <section className="w-full py-10 text-white h-2/3">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <div className="h-56 bg-center bg-cover w-96 four_zero_four_bg"></div>

          <div className="contant_box_404 32">
            <h3 className="text-6xl font-bold">Look like you&apos;re lost</h3>

            <p className="mt-4">
              The page you are looking for is not available!
            </p>

            <a
              href="/"
              className="inline-block px-8 py-4 mt-8 text-white bg-green-500 rounded-lg link_404 hover:bg-green-600"
            >
              Go to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
