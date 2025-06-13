// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.email === "admin@gmail.com" && credentials.password === "admin") {
      navigate("/admin");
    } else if (credentials.email === "user@gmail.com" && credentials.password === "user") {
      navigate("/user");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-container">
        <div className="university-header">
          <h1>University Exam Management System</h1>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                required
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                required
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
