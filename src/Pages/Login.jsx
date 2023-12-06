import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaFaceRollingEyes } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ApiProvider } from "../ContextProvider/ContextProvider";
const Login = () => {
  const location = useLocation();
  const { signIn, google } = useContext(ApiProvider);
  const nevigate = useNavigate();
  const [passwordType, setPassword] = useState(true);
  const type = () => {
    setPassword(!passwordType);
  };

  const handlelog = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset();
        toast.success(" User Successful register ");
        nevigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogle = () => {
    google()
      .then(() => {
        toast.success("User successfully login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <section className="mt-20 flex justify-center  max-w-7xl mx-auto items-center">
      <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
        <form onSubmit={handlelog}>
          <div className="relative mb-6">
            <label>Email address</label>
            <input
              type="email"
              className="peer block border min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput3"
              name="email"
              required
              placeholder="Email address"
            />
          </div>

          <div className="relative mb-6">
            <label>Password</label>
            <input
              name="password"
              required
              type={passwordType ? "password" : "text"}
              className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 border"
              id="exampleFormControlInput33"
              placeholder="Password"
            />
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className=" relative mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <label
                className="absolute -top-[260%] left-[1790%] hover:cursor-pointer hover:bg-slate-500 hover:text-white p-2"
                onClick={type}
              >
                <FaFaceRollingEyes></FaFaceRollingEyes>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="inline-block w-full rounded hover:bg-sky-950 bg-sky-900 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Sign in
          </button>

          <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              <Link to="/reg">
                {" "}
                New to this Website go for{" "}
                <span className="underline text-blue-700">Register</span> First
              </Link>
            </p>
          </div>
        </form>
        <>
          <a
            onClick={handleGoogle}
            className="mb-3 flex w-full items-center justify-center rounded hover:bg-sky-950 bg-sky-900 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            // style="background-color: #3b5998"
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            {/* Google  */}
            Continue with Google
          </a>
          {/* <a
            className="mb-3 flex w-full items-center hover:bg-sky-950 justify-center rounded bg-sky-900 px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
            href="#!"
            role="button"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Continue with Github
          </a> */}
        </>
      </div>
    </section>
  );
};

export default Login;
