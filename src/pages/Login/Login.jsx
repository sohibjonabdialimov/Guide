import React from "react";

const Login = () => {
  return (
    // <div classNameName='w-[600px] bg-blue-500 bord'>
    //   <form>
    //     <h1>Kirish</h1>
    //     <div>
    //       <p>username</p>
    //       <input type="text" />
    //     </div>
    //     <div>
    //       <p>username</p>
    //       <input type="password" />
    //     </div>
    //     <span>google orqali kirish</span>
    //     <button>
    //       <p>Davom etish</p>
    //       <ion-icon name="chevron-forward-outline"></ion-icon>
    //     </button>
    //   </form>

    // </div>
    <div className="w-2/5 mx-auto mt-36">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-black font-bold text-3xl my-3">Kirish</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-blue-500 text-xs italic text-center">
           google orqali kirish
          </p>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Davom etish
          </button>
          <a
            className="py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 inline-block align-baseline font-bold text-white"
            href="#"
          >
            <ion-icon className="text-3xl" name="chevron-forward-outline"></ion-icon>
          </a>
        </div>
      </form>
      
    </div>
  );
};

export default Login;
