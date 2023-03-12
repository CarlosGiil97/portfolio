import logo from './logo.svg';
import './App.css';
import './index.css';
import CustomNavbar from './components/CustomNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section from './components/Section';
import Formacion from './components/Formacion';
import Experiencia from './components/Experiencia';
import  Skills from './components/Skills';
import Footer from './components/Footer';
import Proyectos from './components/Proyectos';


function App() {


  return (
    <div className="App fourth-color " >
      <CustomNavbar/>
      <Section/>
      <Formacion/>
      <Experiencia />
      <Skills />
      <Proyectos />
      <Footer />
    </div>
  );
}

export default App;
