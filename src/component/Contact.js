import React, { useState } from "react";
import CP from "../image/logo/CP.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    console.log(event.target);
    event.preventDefault();
    try {
      let url = "http://localhost:3000/Contact";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const response = await fetch(url);
      const dataItem = await response.json();
      console.log(dataItem);
      setName("");
      setEmail("");
      setMessage("");
      window.alert(`Terima Kasih ${name} sudah mengisi form!!`);
      // console.log(name);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <main className="contact">
        <div className="title">
          <img className="icon" src={CP} alt="Contact" />
          <h1>Contact</h1>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="name"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              id="name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              id="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              id="message"
            />
          </Form.Group>

          <Button variant="primary" type="submit" id="submit">
            Submit
          </Button>
        </Form>
        {/* <form onClick={(event) => handleSubmit()}>
          <div className="formBox">
            <input type="text" name="name" id="name" placeholder="Your Name" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Your Message"
            />
            <br />
            <input type="submit" value="Submit" id="submit" />
          </div>
        </form> */}
      </main>
    </>
  );
}

export default Contact;
