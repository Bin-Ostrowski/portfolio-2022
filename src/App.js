import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

//set state for conditional rendering selected page
// const [pageSelected, setPageSelected] = useState('');
//finish from 20.4.6 Convert the App into an SPA

export default function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        {/* {!pageSelected ? (
    
          <About></About>
       
        ) : (
          <>
          <ContactForm></ContactForm>
          <About></About>
          <Portfolio></Portfolio>
          <Resume></Resume>
          </>

        )} */}
        <ContactForm></ContactForm>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}
