function Projects() {
  return (
    <section id="work">
      <h2>Here's what I've done so far</h2>
      <div className="project">
        <h3>Programming Project</h3>
        <h4>Bank Transaction Manager</h4>
        <div className="project-images">
          <img
            src="/images/oops1.jpeg"
            alt="Programming Project"
          />
          <img
            src="/images/OOPS2.png"
            alt="Programming Project"
          />
        </div>
        <p>
          The code demonstrates features such as creating accounts,
          depositing and withdrawing money, transferring money,
          viewing transaction history, and rolling back transactions.
        </p>
        <a
          href="https://github.com/Harpreet0800/BankingSystem-C-"
          target="_blank"
        >
          GitHub Link
        </a>
      </div>
      <div className="project">
        <h3>Web Development</h3>
        <h4>BMI Calculator</h4>

        <div className="project-images">
          <img
            src="/images/web1.png"
            alt="Web Development"
          />
          <img
            src="/images/web2.png"
            alt="BMI Calculator"
          />
        </div>
        <p>
          This project is a basic demonstration of my learning in
          web development. I applied HTML, CSS and JavaScript
          concepts to create a BMI calculator that takes user input
          and calculates the BMI result.
        </p>
        <a
          href="https://github.com/Harpreet0800/Task-BMI"
          target="_blank"
        >
          GitHub Link
        </a>
      </div>
    </section>
  );
}
export default Projects;