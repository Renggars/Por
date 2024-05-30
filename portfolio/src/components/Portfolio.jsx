import React from "react";
import PortfolioPNG from "../assets/Portfolio.png";
import KalkulatorPNG from "../assets/Kalkulator.png";
import WeateherPNG from "../assets/Weather.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="w-full px-4 mt-28 lg:mt-36">
        <div className="max-w-xl mx-auto text-center mb-5">
          <div className="font-bold text-3xl text-black mb-2">Portfolio</div>
          <div className="font-semibold text-green-main text-lg mb-4">
            Our Recent Work
          </div>
        </div>
      </div>

      <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto sm:px-10">
        <div className="mb-10 md:mb-12 p-4 sm:px-8 md:px-16 xl:px-32">
          <div className="rounded-md shadow-lg shadow-green-main overflow-hidden">
            <div className="">
              <img src={PortfolioPNG} alt=""/>
            </div>
            <h3 className="font-bold text-xl text-black mt-3 mb-3 px-2">
              Portofolio Webstie
            </h3>
            <p className="text-base text-slate-500 mb-3 px-2">
              Website portofolio yang dibangun menggunakan React dan Tailwind
              CSS, memungkinkan pengguna untuk mengunduh CV dan mengirim pesan
              langsung melalui integrasi dengan Getform.
            </p>
          </div>
        </div>
        <div className="mb-10 md:mb-12 p-4 sm:px-8 md:px-16 xl:px-32 ">
          <div className="rounded-md shadow-lg shadow-[#61DAFB] overflow-hidden">
            <div className="">
              <img src={WeateherPNG} alt=""/>
            </div>
            <h3 className="font-bold text-xl text-black mt-3 mb-3 px-2">
              Weather App
            </h3>
            <p className="text-base text-slate-500 mb-3 px-2">
              Website cuaca yang dibangun menggunakan React dan Tailwind CSS,
              memanfaatkan API weather untuk menyediakan informasi cuaca
              real-time.
            </p>
          </div>
        </div>
        <div className="mb-10 md:mb-12 p-4 sm:px-8 md:px-16 xl:px-32">
          <div className="rounded-md shadow-lg shadow-[#EEB767]  overflow-hidden">
            <div className="">
              <img src={KalkulatorPNG} alt=""/>
            </div>
            <h3 className="font-bold text-xl text-black mt-3 mb-3 px-2">
              Kalkulator Cepat
            </h3>
            <p className="text-base text-slate-500 mb-3 px-2">
              Aplikasi kalkulator intuitif yang dibangun menggunakan React dan
              Tailwind CSS, menawarkan perhitungan cepat dan antarmuka pengguna
              yang bersih dan responsif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
