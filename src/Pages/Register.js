import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase";
import "./Register.css";
import logo from "../Photos/logo.png";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [user, loading] = useAuthState(auth);
    const [error, setError] = useState(false);
    const history = useHistory();
    const register = () => {
        if (!username) alert("Please enter name");
            registerWithEmailAndPassword(username, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history.replace("/dashboard");
    }, [user, loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("/auth/register", {
            username,
            email,
            password,
          });
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
    };
    return (
        <div className="register">
            <div className="register__container">
            <img src={logo} alt={"logo"}></img>
                <input
                type="text"
                className="register__textBox"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Full Name"
                onSubmit={handleSubmit}
                />
                <input
                type="text"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                onSubmit={handleSubmit}
                />
                <input
                type="password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                onSubmit={handleSubmit}
                />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <button
                className="register__btn register__google"
                onClick={signInWithGoogle}
                >
                    Register with Google
                </button>
            <div>
                Already have an account? <Link to="/">Login</Link> now.
            </div>
        </div>
    </div>
    );
}
export default Register;