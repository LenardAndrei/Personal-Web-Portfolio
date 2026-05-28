export default function Home() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home">
      <div className="content">
        <div className="text">
          <h1>
            Hi! I am <span className="name-highlight">Lenard</span>
          </h1>
          <p>BS Computer Science Student</p>
          <a className="btn" href="/Lenard_Panganiban_CV.pdf" target="_blank" rel="noopener noreferrer">
            View CV
          </a>
          <button className="btn" onClick={handleContactClick}>
            Contact
          </button>
        </div>

        <div className="pic">
          <img src="/formalpic.JPG" alt="Lenard" />
        </div>
      </div>
    </section>
  );
}
