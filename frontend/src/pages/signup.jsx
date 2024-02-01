import axios from "axios";
import {Link} from "react-router-dom";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3003/api/users/register",{name, email, password, role})
      .then((response) => {
        console.log(response.data.message);
        if(response.data.message === "Register sucsessfully!") {
          // goto home page
          setRegisterError(false);
          setRegisterSuccess(true);
          setTimeout(() => {
            setRegisterSuccess(false);
            navigate(
              '/me',
              {state : {email : email}}
              );
            sessionStorage.setItem("email", email)
          }, 1000);
        }else{
          setRegisterError(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };  

 return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
      <form className="w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="name"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Role
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="name"
            type="text"
            placeholder="Enter your Role"
            value={role}
            onChange={(event) => setRole(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="email"
            type="text/email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordConfirm">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="passwordConfirm"
            type="password"
            placeholder="Enter your password"
            value={passwordConfirm}
            onChange={(event) => setPasswordConfirm(event.target.value)}
          />

        {(passwordConfirm.length !== 0 && password !== passwordConfirm) && <p className="text-red-500 text-xs">Password not match!</p>}

        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4" >Already have an account? <Link to="/login"><span className="underline text-blue-600">Log in</span></Link></p>
      {registerSuccess && <p className="text-center text-sm text-green-600 mt-4">Register successfully!</p>}
      {registerError && <p className="text-center text-sm text-red-600 mt-4">Register failed!</p>}

    </div>
 );
};

export default SignUp;