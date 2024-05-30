import React from "react";
import profil from "../assets/foto.png";

const Main = () => {
  return (
    <div id="home" className="mt-36 md:mt-60 xl:mt-36 text-background">
      <div className="flex flex-wrap">
        <div className="w-full self-center px-4 text-center md:w-1/2 xl:mt-24 md:mt-16">
          <h1 className="flex items-center text-2xl justify-center font-semibold lg:text-3xl ">
            Hi everyone, I'm{" "}
            <span className="font-bold text-green-main text-3xl mx-1 lg:text-4xl xl:text-5xl">
              Rengga
            </span>
          </h1>
          <h2 className="mt-5 font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:mt-10">
            Web Developer
          </h2>
          <p className="mt-8 md:mt-5 xl:mt-10 font-semibold md:text-lg lg:text-xl xl:text-2xl">
            Let's create inspiring websites together!
          </p>

          <div className="mt-14 md:mt-12 xl:mt-20">
            <a
              href="#contact"
              className="h-10 xl:text-xl font-semibold text-white bg-green-main rounded-full mr-3 hover:shadow-lg hover:opacity-80 cursor-pointer px-2 transition duration-300 ease-in-out md:text-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-20 w-full self-end px-4 md:w-1/2 md:mx-auto xl:mt-24">
          <div className="relative mt-10 lg md:mt-8">
            <img
              src={profil}
              alt="Rengga"
              className="h-[300px] xl:h-[400px] mx-auto"
            ></img>
            <span className="absolute -bottom-[80px] -right-36 -z-10 left-1/2 -translate-x-1/2 sm:-right-16 md:-right-44 md:-top-4 lg:-right-24 lg:-top-4">
              <svg
                className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00DC82"
                  d="M30.7,-29.2C41.2,-20.2,52.1,-10.1,49.6,-2.5C47.2,5.2,31.3,10.3,20.8,21.3C10.3,32.4,5.2,49.2,-4.1,53.3C-13.3,57.4,-26.6,48.6,-37.1,37.6C-47.6,26.6,-55.3,13.3,-59.4,-4.1C-63.5,-21.5,-64.1,-43,-53.5,-52C-43,-61,-21.5,-57.5,-5.7,-51.7C10.1,-46,20.2,-38.1,30.7,-29.2Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
