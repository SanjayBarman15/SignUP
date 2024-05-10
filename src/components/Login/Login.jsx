import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GoogleButton from "react-google-button";
import { auth, googleprovider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./Login.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
const Login = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleprovider);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text" onClick={() => navigate("/")}>
          Login
        </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email ID" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="f-password">
        Forget Password? <span>Click Here</span>
      </div>
      <div className="s-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </div>
        <div className="submit">Login</div>
      </div>
      <div className="Googlesubmit">
        <div className="orsection">
          <text className="or">or continue with</text>
        </div>
        <div className="googleauth">
          <GoogleButton className="auth" onClick={signInWithGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Login;
