const articles = [
  {
    image: "/images/art1.png",
    title: "Your First Website",
    description: "Learn the basics of creating a website using HTML, CSS and JavaScript.",
    rating: "4.8 ⭐",
    author: "MDN Web Docs"
  },
  {
    image: "/images/Art2.jpg",
    title: "Personal Development",
    description: "Learn simple and efficient ways to improve your skills, habits and productivity.",
    rating: "5 ⭐",
    author: "OSHO"
  }
];
function Articles() {
  return (
    <section id="articles">
      <h2>Featured Articles</h2>

      <div className="cards">
        {articles.map((article) => (
          <div className="card" key={article.title}>
            <img src={article.image} alt={article.title} />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>Rating: {article.rating}</p>
            <p>Author: {article.author}</p>
          </div>
        ))}
      </div>
      <button>See all articles</button>
    </section>
  );
}
export default Articles;