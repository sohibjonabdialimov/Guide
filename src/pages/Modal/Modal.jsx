import React, { useEffect, useRef } from "react";

const Modal = () => {
  let modal = useRef(null);
  useEffect(() => {
    console.log(modal.current);
  function modalHandler(val) {
      if (val) {
          fadeIn(modal);
      } else {
          fadeOut(modal);
      }
  }
  function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
          if ((el.style.opacity -= 0.1) < 0) {
              el.style.display = "none";
          } else {
              requestAnimationFrame(fade);
          }
      })();
  }
  function fadeIn(el, display) {
      el.style.opacity = 0;
      el.style.display = display || "flex";
      (function fade() {
          let val = parseFloat(el.style.opacity);
          if (!((val += 0.2) > 1)) {
              el.style.opacity = val;
              requestAnimationFrame(fade);
          }
      })();
  }
  }, [])



  return (
    <>
      <div
      ref={modal}
        className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              First Name
            </label>
            <input
              id="name"
              type="text"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Jahongir"
            />
            <label
              for="email2"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Last Name
            </label>
            <div className="relative mb-2 mt-1">
              <input
                id="email2"
                type="text"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-[12px] text-sm border-gray-300 rounded border"
                placeholder="Axmadov"
              />
            </div>
            <label
              for="email5"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Role
            </label>
            <div className="relative mb-2 mt-1">
              <input
                id="email5"
                type="text"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-[12px] text-sm border-gray-300 rounded border"
                placeholder="Admin"
              />
            </div>
            <label
              for="expiry"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Age
            </label>
            <div className="relative mb-2 mt-1">
              <input
                id="expiry"
                type="number"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="16"
              />
            </div>
            <label
              for="expiry1"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Username
            </label>
            <div className="relative mb-2 mt-1">
              <input
                id="expiry1"
                type="text"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Hacker"
              />
            </div>
            <label
              for="cvc"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
            >
              Password
            </label>
            <div className="relative mb-2 mt-1">
              <input
                type="password"
                id="cvc"
                className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-start w-full">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                Submit
              </button>
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onclick={() => {modalHandler()}}
              >
                Cancel
              </button>
            </div>
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onclick={() => {modalHandler()}}
              aria-label="close modal"
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center py-12" id="button">
        <button
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
          onclick={() => {modalHandler(true)}}
        >
          Open Modal
        </button>
      </div>
    </>
  );
};

export default Modal;
