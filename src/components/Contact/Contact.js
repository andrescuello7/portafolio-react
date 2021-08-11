import { Form } from "react-bootstrap";
import { useState } from "react"
import axios from "axios";

const Home = () => {
    //States
    const [dataInputConsults, setDataInputConsults] = useState({});

    //Funcion of method Post of consults
    const ConsultsOfUser = async () => {
      try {
        await axios.post("https://server-gmail.herokuapp.com/api/consult", dataInputConsults);
        //await axios.post("http://localhost:5000/api/consult", dataInputConsults);
        console.log('consulta enviada');
      } catch (error) {
        console.log(error);
      }
    };

    //Change the text in form
    const HandleChange = (e) => {
      const { name, value } = e.target;
      const changedInput = { ...dataInputConsults, [name]: value };
      setDataInputConsults(changedInput);
    };
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
                            <Form.Control name="email" type="email" onChange={HandleChange} placeholder="Email address"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control name="description" as="textarea" onChange={HandleChange} placeholder="When is your question?" />
                        </Form.Group>
                        <button className="btn btn-primary w-100" onClick={ConsultsOfUser}><b>Send</b></button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Home;
