import React, {useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";


export default function App() {
  
  // conditionally render main page from Nav bar
  const [pages] = useState([
    {
      name: 'About Me',
      page: <About></About>
    },
    {
      name: 'Contact',
      page: <ContactForm></ContactForm>
    },
    {
      name: 'Portfolio',
      page: <Portfolio></Portfolio>
    },
    {
      name: 'Resume',
      page: <Resume></Resume>
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div>
      <Nav
      pages={pages}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      ></Nav>
        <section className="hero"></section>
      <main>
      {currentPage.page}
      </main>
      <Footer></Footer>
    </div>
  );
}
