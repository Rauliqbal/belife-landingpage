import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import OldAge from './components/OldAge';
import Service from './components/Service';
import Testimoni from './components/Testimoni';

function App() {
   return (
      <div>
         <NavBar />
         <Hero />
         <Service />
         <OldAge />
         <Testimoni />
         <Contact />
         <Footer />
      </div>
   );
}

export default App;
