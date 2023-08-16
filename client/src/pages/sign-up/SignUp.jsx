import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form className="flex min-h-screen items-center justify-center gap-x-32">
      <div>
        <h1 className="mb-8 text-center text-9xl font-extrabold">Sign Up!</h1>
        <p className="text-center text-2xl">
          Hi there, It's free please enter your details
        </p>
      </div>
      <div className="w-1/3 rounded-2xl p-6 shadow-2xl">
        <label className="mb-2 block text-xl" htmlFor="name">
          Full Name
        </label>
        <input
          type="text"
          className="mb-2 w-full border px-2 py-1 text-xl text-black focus:outline-none"
          placeholder="Enter Full Name"
        />
        <label className="mb-2 block text-xl" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="mb-2 w-full border px-2 py-1 text-xl text-black focus:outline-none"
          placeholder="Enter Username"
        />
        <label className="mb-2 block text-xl" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          className="mb-2 w-full border px-2 py-1 text-xl text-black focus:outline-none"
          placeholder="Enter Email"
        />
        <label className="mb-2 block text-xl" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="mb-4 w-full border px-2 py-1 text-xl text-black focus:outline-none"
          placeholder="Enter Password"
        />
        <label className="mb-2 block text-xl" htmlFor="confirm">
          Confirm Password
        </label>
        <input
          type="password"
          className="mb-4 w-full border px-2 py-1 text-xl text-black focus:outline-none"
          placeholder="Confirm Password"
        />
        <p className="mb-4 cursor-pointer text-purple-700 underline">
          Show Password
        </p>
        <button
          type="submit"
          className="hover:text-secondary my-4 w-full rounded-xl border-2 border-purple-700 bg-purple-700 px-5 py-2 text-xl font-bold text-white hover:bg-transparent"
        >
          Sign Up
        </button>
        <Link to="/login" className="block text-center">
          Already have an account?
          <span className="ml-1 font-bold">Login now</span>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
