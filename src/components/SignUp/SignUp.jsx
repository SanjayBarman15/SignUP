import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate, useLocation } from "react-router-dom";
import GoogleButton from "react-google-button";
import { auth, googleprovider } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import user_icon from '../../assets/person.png'
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
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
  return (
    <div className="container">
      <div className="header">
        <div className="text" onClick={()=>navigate("/")}>Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit" onClick={signIn}>
          Sign Up
        </div>
        <div className="submit" onClick={() => navigate("/login")}>
          Login
        </div>
      </div>
      <div className="Googlesubmit">
        <div className="orsection">
          <span className="or">or continue with</span>
        </div>
        <div className="googleauth">
          <GoogleButton className="auth" onClick={signInWithGoogle} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
