import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; 
const BASE_URL = "https://leafquad-backend-final.vercel.app/api";

function LoginPage() {
    const { setIsLoggedIn, token, setToken } = useAuth();
    //const [token, setToken] = useState("");
    const [protectedData, setProtectedData] = useState(null);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = hashParams.get("access_token");
        if (accessToken) {
            setToken(accessToken);
            window.history.replaceState(null, "", window.location.pathname);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);
            
            setToken(data.token);
            setIsLoggedIn(true);
            setError("");
        }
        catch (err) {
            setError(err.meesage);
        }
    };

    const handleSignUp  = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${BASE_URL}/register`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (data.error) throw new Error(data.error);

            setError("Registration successful! Please sign in.");
        } 
        catch (err) {
        setError(err.message);
        }
    };
        
    const fetchProtectedData = async () => {
        try {
          const response = await fetch(`${BASE_URL}/protected`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          });
    
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to fetch protected data");
          }
    
          const data = await response.json();
          setProtectedData(data);
          setError("");
        } 
        catch (err) {
          setError(err.message);
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
        <h1 className="login-text">Login</h1>
  
        {error && (
          <div
            style={{
              color: error.includes("successful") ? "green" : "red",
              margin: "10px 0",
              padding: "10px",
              backgroundColor: error.includes("successful")
                ? "#e8f5e9"
                : "#ffebee",
            }}
          >
            {error}
          </div>
        )}
  
        {!token ? (
          <div>
            <p className="login-describe">Sign in if you have already signed up</p>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-login"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-login"
              />
            <div class="sign-button-container">
              <button class="sign-button" onClick={handleSignIn}>
                <span class="sign-button-text">Sign In</span>
              </button>
              <button class="sign-button" onClick={handleSignUp}>
                <span class="sign-button-text">Sign Up</span>
              </button>
            </div>

            </form>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div>
              <h3>Your Token:</h3>
              <textarea
                readOnly
                value={token}
                style={{ width: "100%", height: "100px" }}
              />
            </div>
  
            <button onClick={fetchProtectedData} style={{ padding: "8px" }}>
              Fetch Protected Data
            </button>
  
            {protectedData && (
              <div>
                <h3>Protected Data:</h3>
                <pre>{JSON.stringify(protectedData, null, 2)}</pre>
              </div>
            )}
  
            <button
              onClick={() => {
                setToken("");
                setProtectedData(null);
              }}
              style={{ padding: "8px" }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }
  
  export default LoginPage;