import React, {useState} from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";


export default function App() {
  //set state for conditional rendering selected page
  // const [pageSelected, setPageSelected] = useState(false);
  //finish from 20.4.6 Convert the App into an SPA


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

      //conditional rendering
      //  pageSelected={pageSelected}
      //  setPageSelected={setPageSelected}
      ></Nav>
      <main>
        {/* {!pageSelected && <About></About> } */}
      {currentPage.page}
        {/* <ContactForm></ContactForm>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume> */}
      </main>
      <Footer></Footer>
    </div>
  );
}
