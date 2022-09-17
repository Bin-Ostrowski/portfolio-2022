import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";

export default function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}
