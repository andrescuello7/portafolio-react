import "./About.css"

const About = () => {
    return (
        <div className="about">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">About</b>
            </div>
            <div className="AboutDate">
                <div className="m-2">
                    <img
                        className="AboutImg"
                        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    />
                </div>
                <div className="AboutText m-2">
                    <h2>I'm Andres Cuello</h2>
                    <div>Hello, I am programer Frontend Junior and Backend Developer, i am programing from april of 2020, i have mys studies of Rolling Code School, they taught me of Html5, Css, Bootstrap, Git, JavaScript, ReactJs, NodeJs, MongoDb and work in team, in this moment i am working of freelance.</div>
                </div>
            </div>
        </div>
    );
}

export default About;