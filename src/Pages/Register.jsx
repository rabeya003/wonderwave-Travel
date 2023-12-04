import { useState } from "react";
import { FaFaceRollingEyes } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Register = () => {
  const [passwordType, setPassword] = useState(true);
  const type = () => {
    setPassword(!passwordType);
  };
  return (
    <section className="h-screen max-w-7xl mx-auto flex justify-center items-center">
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
        <form>
          <div className="relative mb-6">
            <label>Your Name</label>
            <input
              type="text"
              className="peer block min-h-[auto] w-full border rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              name="name"
              required
              placeholder="Name"
            />
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <label>Email address</label>
            <input
              type="email"
              className="peer block min-h-[auto] w-full border rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              name="email"
              required
              placeholder="Email address"
            />
          </div>

          <div className="relative mb-6">
            <label>Password</label>
            <input
              type={passwordType ? "password" : "text"}
              className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border"
              id="exampleFormControlInput33"
              placeholder="Password"
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className=" relative mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <label
                className="absolute -top-[260%] left-[1590%] hover:cursor-pointer hover:bg-slate-500 hover:text-white p-2"
                onClick={type}
              >
                <FaFaceRollingEyes></FaFaceRollingEyes>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded bg-sky-900 hover:bg-sky-950 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Sign up
          </button>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              <Link to="/login">
                Already have an account? go for{" "}
                <span className="underline text-blue-700">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
