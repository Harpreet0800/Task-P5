import { useState } from "react";
function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubscribe(event) {
    event.preventDefault();
    try {
      const a = new URLSearchParams();
      a.append("email", email);
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        body: a});
      const data = await response.text();
      setMessage(data);
      if (response.ok) {
        setEmail("");
      }
    } catch (error) {
      setMessage("Server error. Please try again.");} }
  return (
    <section id="signup">
      <h2>SIGN UP FOR OUR DAILY INSIDER</h2>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      <p>{message}</p>
    </section>
  );
}
export default Subscribe;
