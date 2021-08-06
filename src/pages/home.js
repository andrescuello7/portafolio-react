//Components
import Present from "../components/Present/Present";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/FooterSimple";

const Home = () => {
    return (
        <div>
            <div className="animate__animated animate__fadeIn">
                <Present />
            </div>
            <div className="animate__animated animate__fadeIn">
                <About />
            </div>
            <div className="animate__animated animate__fadeIn">
                <Skills />
            </div>
            <div className="animate__animated animate__fadeIn">
                <Contact />
            </div>
            <div className="animate__animated animate__fadeIn mt-5">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
