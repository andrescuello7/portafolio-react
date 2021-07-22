//Components
import Present from "../components/Present/Present";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <div>
            <div>
                <Present />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
