import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { db } from "./firebase";
function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  async function handleLogin(event) {
    event.preventDefault();
    setMessage("");
    try {
      const userQuery = query(
        collection(db, "users"),
        where("email","==",email.toLowerCase())
      );
      const users = await getDocs(userQuery);
      if (users.empty) {
        setMessage("Incorrect email or password.");
        return;
      }
      const user = users.docs[0].data();
      const correctPassword = await bcrypt.compare(
        password,
        user.passwordHash
      );
      if (correctPassword) {
        onLogin(user);
        navigate("/");
      } else {
        setMessage("Incorrect email or password.");
      }
    } catch (error) {
      console.log(error);
      setMessage("Login failed. Please try again.");
    }
  }
  return (
    <div className="page">
      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Your email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            required
          />
          <label>Your password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit">Login</button>
<button
  type="button"
  onClick={() => navigate("/register")}
>
  New User? Sign Up
</button>
        </form>
        <p style={{ color: "red" }}>{message}</p>
    
      </div>
    </div>
  );
}
export default Login;
