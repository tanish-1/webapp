import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from "../googlesign/Config";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal)
            .then(data => {
                alert("Check your email for password reset instructions.")
                history("/");
            })
            .catch(err => {
                alert(err.code);
            });
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <h1 className="text-center mb-4 text-2xl font-bold">Forgot Password</h1>
                <form onSubmit={(e) => handleSubmit(e)} className="mt-4">
                    <input name="email" placeholder="Enter Your Email" className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-2" style={{ maxWidth: '300px' }} />
                    <br />
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" style={{ maxWidth: '300px' }}>Reset</button>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;
