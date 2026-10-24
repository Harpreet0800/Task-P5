
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {addDoc,collection,getDocs,query,where} from "firebase/firestore";
import bcrypt from "bcryptjs";
import { db } from "./firebase";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  async function handleRegister(event) {
    event.preventDefault();
    setMessage("");
   if (!name.includes(" ")) {
  setMessage("Enter your first and last name");
  return;
}
    if (password !== confirmPassword) {
      setMessage("Enter the same Password");
      return;
    }
    if (password.length < 8) {
      setMessage("The Password must contain at least 8 characters");
      return;
    }
    try {
  const userQuery = query(
    collection(db, "users"),
    where("email", "==", email.toLowerCase())
  );
      const users = await getDocs(userQuery);
      if (!users.empty) {
        setMessage("This email is already registered");
        return;
      }
      const passwordHash = await bcrypt.hash(password, 10);
await addDoc(collection(db, "users"), {
  name: name,
  email: email.toLowerCase(),
  passwordHash
});
      setMessage("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(error.message);
    }
  }
  return (
    <div className="page">
      <div className="form-box">
        <h2>Create a DEV@Deakin Account</h2>
        <form onSubmit={handleRegister}>
          <label>Name*</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <label>Email*</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <label>Password*</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            minLength={8}
            required
          />
          <label>Confirm password*</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            minLength={8}
            required
          />
          <button type="submit">Create</button>
        </form>
        <p style={{ color: "red" }}>{message}</p>
        <p>
          Already registered? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
export default Register;
