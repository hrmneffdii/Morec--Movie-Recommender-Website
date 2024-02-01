import {Link} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3003/api/users/login",{email, password})
      .then((response) => {
        if(response.data.message === "login sucsessfully!") {
          // goto home page
          setRegisterError(false);
          setRegisterSuccess(true);
          setTimeout(() => {
            setRegisterSuccess(false);
            navigate(
              '/me',
              { state: { email: email } }
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
      <h1 className="text-4xl font-bold mb-6">Login</h1>
      <form className="w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4" >Dont have an account? <Link to="/signup"><span className="text-blue-600 underline">Sign Up</span></Link></p>
      {registerSuccess && <p className="text-center text-sm text-green-600 mt-4">Login successfully!</p>}
      {registerError && <p className="text-center text-sm text-red-600 mt-4">Login failed, please try again</p>}
    </div>
  );
};

export default Login;