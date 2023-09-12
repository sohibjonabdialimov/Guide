import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav classNameNameName="bg-gray-800 w-1/4 h-[100vh]">
    //   <div classNameNameName="mx-auto px-2 sm:px-6 lg:px-8">
    //     <div classNameNameName="relative flex h-16 items-center">
    //       <div classNameNameName="flex flex-col items-center justify-center sm:items-stretch sm:justify-start">
    //         <div classNameNameName="flex flex-shrink-0 items-center justify-center mb-5 mt-[40px]">
    //           <img
    //             classNameNameName="h-8 w-auto"
    //             src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //             alt="Your Company"
    //           />
    //         </div>
    //         <div classNameNameName="flex flex-col">
    //           <div classNameNameName="flex space-x-4 flex-col">
    //             <a
    //               href="#"
    //               classNameNameName="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
    //               aria-current="page"
    //             >
    //               Guides
    //             </a>
    //             <a
    //               href="#"
    //               classNameNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    //             >
    //               Users
    //             </a>
    //             <a
    //               href="#"
    //               classNameNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    //             >
    //               Profile
    //             </a>
    //             <a
    //               href="#"
    //               classNameNameName="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
    //             >
    //               Notification
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div classNameNameName="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //         <button
    //           type="button"
    //           classNameNameName="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //         >
    //           <span classNameNameName="absolute -inset-1.5"></span>
    //           <span classNameNameName="sr-only">View notifications</span>
    //           <svg
    //             classNameNameName="h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke-width="1.5"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png"
              alt="Logo"
              className="w-28 h-18 mr-2"
            />
            <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
          </div>
          <div className="md:hidden flex items-center">
            <button id="menuBtn">
              <i className="fas fa-bars text-gray-500 text-lg"></i>
            </button>
          </div>
        </div>

        <div className="space-x-5">
          <button>
            <i className="fas fa-bell text-gray-500 text-lg"></i>
          </button>
          <button>
            <i className="fas fa-user text-gray-500 text-lg"></i>
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-wrap">
        <div
          className="p-2 bg-white w-full md:w-60 flex flex-col md:flex"
          id="sideNav"
        >
          <nav>
            <Link
              to="/"
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-home mr-2"></i>Guides
            </Link>
            <Link
              to="/users"
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-file-alt mr-2"></i>Users
            </Link>
            <Link
              to="profile"
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-users mr-2"></i>Profile
            </Link>
            <Link
              to="notification"
              className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              href="#"
            >
              <i className="fas fa-store mr-2"></i>Notification
            </Link>
          </nav>

          <a
            className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
            href="#"
          >
          </a>

          <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

          <p className="mb-1 px-5 py-3 text-left text-xs text-cyan-500">
            Copyright Jahongir@2023
          </p>
        </div>

        <div className="flex-1 p-4 w-full md:w-1/2 text-black">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
