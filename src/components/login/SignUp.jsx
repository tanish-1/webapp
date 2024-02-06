import React, { useState } from "react";
import { auth } from "../googlesign/Config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="App">
      {/* Registration and login Screen */}
      <div className="flex justify-center">
        <div
          className={login === false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          SignUp
        </div>
        <div
          className={login === true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          SignIn
        </div>
      </div>
      <h1 className="text-center">{login ? "SignIn" : "SignUp"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")} className="max-w-md mx-auto">
        <input name="email" placeholder="Email" className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <br />
        <input name="password" type="password" placeholder="Password" className="w-full px-4 py-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" />
        <br />
        <p onClick={handleReset} className="text-blue-500 cursor-pointer mb-4">Forgot Password?</p>
        <br />
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{login ? "SignIn" : "SignUp"}</button>
      </form>
    </div>
  );
}

export default RegisterAndLogin;
