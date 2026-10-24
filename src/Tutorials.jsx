function Tutorials() {
  return (
    <section id="tutorials">
      <h2>Featured Tutorials</h2>
      <div className="cards">
        <div className="card">
          <img src="/images/oops1.jpeg" alt="Functions accessibility tutorial" />
          <h3>Private-Punlic Functions</h3>
          <p>
            Learn the Concept of Public and Private functions in a class and learn wht they are made and how they are accessed inside and outside of a class.
          </p>
          <p>⭐ 5 - Harpreet</p>
        </div>
        <div className="card">
          <img src="/images/web1.png" alt="Frontend tutorial" />
          <h3>Website Working Functionalities</h3>
          <p>
            Learn how a basic website is created and how the different functionalities can be added to make the website interactive
          </p>
          <p>⭐ 4.9 - Harpreet</p>
        </div>
      </div>
      <button>See all tutorials</button>
    </section>
  );
}
export default Tutorials;