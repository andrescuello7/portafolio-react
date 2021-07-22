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
                    <div>began my career as a frontend developer in the 2020 year and have slowly over time taken on a more web based technical front-end developer role. work in details that many frontend developers tend to overlook. Being a hybrid frontend dev and technician with knowledge in digital content allows me to fill two roles simultaneously, which in today’s economy can be very beneficial to any company. Having studied at Coder house and done real projects has given me a wealth of knowledge and a diverse skill set to be able to tackle any development project that comes my way.</div>
                </div>
            </div>
        </div>
    );
}

export default About;