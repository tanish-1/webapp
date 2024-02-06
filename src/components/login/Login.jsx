// Login.js

import React, { useState} from "react";

import { auth} from "../googlesign/Config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleLogin = (e)=>{
     e.preventDefault();
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
      console.log(userCredential)
     }).catch((error)=>{
      console.log(error)
     })
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
