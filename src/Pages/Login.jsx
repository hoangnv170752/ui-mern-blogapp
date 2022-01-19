import  React, { useEffect, useState, useRef, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from '../context/Context';
import axios from "axios";
import "./Login.css" ;
import logo from "../Photos/logo.png";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
        const res = await axios.post("/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
        }
    };
    useEffect(() => {
        if (loading) {
          return;
        }
        if (user) history.replace("/dashboard");
      }, [user, loading]);
      
      return (
          <div className="login">
              <div className="login__container">
              <img src={logo} alt={"logo"}></img>
                <input
                    type="text"
                    className="login__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                    ref={userRef}
                    onSubmit={handleSubmit}
                />
                <input
                    type="password"
                    className="login__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    ref={passwordRef}
                    onSubmit={handleSubmit}
                />
                <button
                    className="login__btn"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="login__btn login__google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
              </div>
          </div>
      );
}

export default Login;