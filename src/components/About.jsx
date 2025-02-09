import React from "react";
import MernStack from "../assets/mernstack.png";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import NodeLogo from "../assets/NodeLogo.png";
import Mongodb from "../assets/mongodb.svg";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";
import Mysql from "../assets/mysql.png";
const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Monu Kumar
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Full-Stack Developer with expertise in web development, NextJS,
              SEO, and the MERN stack.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I am currently pursuing Bachelor of Technology at Indian
                  institute of Information Technology Allahabad. My branch is
                  Information Technology. In past few years of journey of my
                  college, I got a proficiency in C, C++ , javascript language.
                  I also learned about different libraries and framework like
                  Reactjs, Nextjs and many more. I started my journey in web
                  development with a passion for creating intuitive and scalable
                  applications. With proficiency in Next.js, I have built
                  projects such as full-stack blogging website and Real Estate
                  website and with proficiency in MERN stack (MongoDB,
                  Express.js, React, and Node.js), I have built Projects such as
                  a full-stack food ordering website. My projects demonstrate my
                  ability to integrate poweful backend solutions with sleek,
                  user-friendly frontend designs.
                </p>
                <div class="flex space-x-4">
                  <img
                    src={NextJs}
                    alt=""
                    className="p-2 rounded-lg w-16 h-16 mt-6"
                  />
                  <img
                    src={MernStack}
                    alt=""
                    className="p-2 rounded-lg w-52 mt-4"
                  />
                </div>
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={NodeLogo} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center  w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Mongodb} alt="" className="w-10" />
                    <span className="font-semibold">Mongodb</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Express} alt="" className="w-10" />
                    <span className="font-semibold">Express Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={NextJs} alt="" className="w-9" />
                    <span className="font-semibold">Next Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Mysql} alt="" className="w-9" />
                    <span className="font-semibold"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I am deeply passionate about exploring new
              technologies and continuously keeping myself up-to-date with the
              latest trends in web development. I believe in the power of
              staying informed about emerging tools, frameworks, and best
              practices to enhance my skill set and stay competitive in the
              ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
