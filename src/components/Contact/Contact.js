import { Form } from "react-bootstrap";

const Home = () => {
    return (
        <div className="about">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">Contact</b>
            </div>
            <div className="contact">
                <div className="contactForm">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Name and surname"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="email" placeholder="Email address"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={8} placeholder="When is your question?" />
                        </Form.Group>
                        <button className="btn btn-primary w-100"><b>Send</b></button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Home;
