import { useState } from "react";
import "./NewPost.css";
function NewPost() {
  const [type, setType] = useState("Question");
  function handlePost(event) {
event.preventDefault();
alert("Post has been sent successfully!");
  }
  return (
    <div className="post-page">
      <form className="post-form" onSubmit={handlePost}>
        <h2>New Post</h2>
        <p>
          Select Post Type:
          <label>
            <input
              type="radio"
              name="type"
              checked={type==="Question"}
              onChange={() =>setType("Question")}/>
            Question
          </label>
          <label>
            <input
              type="radio"
              name="type"
              checked={type ==="Article"}
              onChange={() => setType("Article")} />
            Article
          </label>
        </p>
        <h3>What do you want to ask or share?</h3>
        <label>Title</label>
        <input
          type="text"
          placeholder={
            type === "Question"
              ? "Start your question with how, what, why, etc."
              : "Enter a descriptive title"
          }
          required
        />
        {type === "Question" ? (
          <>
            <label>Describe your problem</label>
            <textarea required /></>
        ) : (
          <>
            <label>Abstract</label>
            <textarea
              placeholder="Enter a 1-paragraph abstract"
              required
            />l
            <label>Article Text</label>
            <textarea
              className="article-text"
              placeholder="Enter your article text"
              required
            /></>)}
        <label>Tags</label>
        <input
          type="text"
          placeholder="Add up to 3 tags, e.g., Java"
          required
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );}
export default NewPost;
