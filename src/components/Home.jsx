import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    // Check if a user is signed in
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setDisplayName(user.displayName);
      } else {
        // No user is signed in
        setDisplayName("");
      }
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      // Redirect to signup page after logout
      navigate("/signup");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div className="box">
      <div className="head">
        <div className="text" onClick={() => navigate("/")}>
          HOME
        </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input-box">
          {displayName ? (
            <h1 className="body-text">Welcome, {displayName}!</h1>
          ) : (
            <h1 className="body-text">You are not signed in</h1>
          )}
        </div>
      </div>
      <div className="sub-container">
        <div className="submit gray" onClick={() => navigate("/signup")}>
          Sign Up
        </div>
        <div className="submit" onClick={logout}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default Home;
