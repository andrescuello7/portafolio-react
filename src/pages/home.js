//Components
import Present from "../components/Present/Present";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/FooterSimple";

const Home = () => {
    return (
        <div>
            <div className="animate__animated animate__fadeIn" id="home">
                <Present />
            </div>
            <div className="animate__animated animate__fadeIn" id="about">
                <About />
            </div>
            <div className="animate__animated animate__fadeIn" id="skills">
                <Skills />
            </div>
            <div className="animate__animated animate__fadeIn" id="contact">
                <Contact />
            </div>
            <div className="animate__animated animate__fadeIn mt-5">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
