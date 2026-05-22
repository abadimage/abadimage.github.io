// Site entry — assembles all sections into the page

const { Nav, Hero, About, StatusBoard, Career, VisualWork, Contact, Footer } = window;

const Site = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <About />
      <StatusBoard />
      <Career />
      <VisualWork />
      <Contact />
    </main>
    <Footer />
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Site />);
