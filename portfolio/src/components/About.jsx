import React from "react";
import CV from "../assets/CV.pdf";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="mt-40 md:mt-72 xl:mt-72 text-background">
      <div className="flex flex-wrap">
        <div className="w-full px-8 xl:px-72 lg:px- md:px-16 sm:px-10 md:mt-10">
          <div className="text-center font-semibold text-3xl xl:text-4xl">
            About Me
          </div>
          <div className="font-semibold text-green-main text-lg xl:text-xl xl:mt-3 text-center">
            Introduction
          </div>
          <p className="text-center mt-5 p-1 sm:mx-4 px-1 md:mx-5 md:px-2 lg:text-lg xl:px-1">
            Halo! Saya Rengga Rendi Saputra, seorang mahasiswa aktif di S1
            Teknik Informatika Universitas Negeri Surabaya dengan minat besar
            dalam web programming. Berbekal ilmu dan kecintaan saya pada dunia
            digital, saya selalu antusias untuk menjelajahi berbagai aspek
            pemrograman web dan mengembangkan kemampuan saya dalam menciptakan
            website yang menarik dan fungsional. Mari kita terhubung dan
            bersama-sama membuat website yang inspiratif!
          </p>
          <div className="mt-4 text-center xl:mt-6">
            <a
              href={CV}
              download="CV-Rengga"
              target="_blank"
              rel="noreferrer"
              className="text-white font-semibold rounded-xl px-10 xl:px-16 hover:shadow-lg hover:opacity-90 cursor-pointer transition duration-300 ease-in-out border border-green-400 md:text-lg xl:text-2xl bg-green-main"
            >
              CV
            </a>
          </div>
        </div>
        <div className="w-full px-8 mt-20">
          <div className="text-3xl font-semibold text-center xl:text-4xl">
            Skills
          </div>
          <div className="font-semibold text-green-main text-lg xl:text-xl xl:mt-3 text-center">
            Introduction
          </div>
          
          <div className="grid grid-cols-2 gap-5 mt-7 sm:px-10 md:px-16 lg:px-20 xl:mt-5 xl:px-72  ">
            <div className="flex cursor-pointer items-center gap-2 rounded border py-2 px-2 group bg-slate-200 hover:shadow-md hover:shadow-orange-500">
              <div>
                <FaHtml5 size={48} className="group-hover:text-orange-500" />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">HTML</div>
              </div>
            </div>

            <div className="flex cursor-pointer bg-slate-200 items-center gap-2 rounded border py-2 px-2 group hover:shadow-md hover:shadow-blue-500">
              <div>
                <FaCss3Alt size={48} className="group-hover:text-blue-500" />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">CSS</div>
              </div>
            </div>

            <div className="flex cursor-pointer bg-slate-200 items-center gap-2 rounded border py-2 px-2 group hover:shadow-md hover:shadow-yellow-300">
              <div>
                <IoLogoJavascript
                  size={48}
                  className="group-hover:text-yellow-300"
                />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">Javascript</div>
              </div>
            </div>

            <div className="flex cursor-pointer bg-slate-200 items-center gap-2 rounded border py-2 px-2 group hover:shadow-md hover:shadow-[#68A063]">
              <div>
                <FaNodeJs size={48} className="group-hover:text-[#68A063]" />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">Node JS</div>
              </div>
            </div>

            <div className="flex cursor-pointer bg-slate-200 items-center gap-2 rounded border py-2 px-2 group hover:shadow-md hover:shadow-[#61DAFB]">
              <div>
                <SiTailwindcss
                  size={48}
                  className="group-hover:text-[#61DAFB]"
                />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">Tailwind</div>
              </div>
            </div>

            <div className="flex cursor-pointer bg-slate-200 items-center gap-2 rounded border py-2 px-2 group hover:shadow-md hover:shadow-[#61DAFB]">
              <div>
                <FaReact size={48} className="group-hover:text-[#61DAFB]" />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">React</div>
              </div>
            </div>

            <div className="flex cursor-pointer bg-slate-200 items-center gap-2 rounded border py-2 px-2 group hover:shadow-md hover:shadow-orange-500">
              <div>
                <FaGitAlt size={48} className="group-hover:text-orange-500" />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">Git</div>
              </div>
            </div>

            <div className="flex cursor-pointer bg-slate-200 items-center gap-2 rounded border py-2 px-2 group hover:shadow-md hover:shadow-black">
              <div>
                <FaGithub size={48} />
              </div>
              <div className="flex items-center ml-2">
                <div className="font-medium translate-y-0">Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
