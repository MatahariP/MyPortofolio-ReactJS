import React, { useState } from "react";
import CP from "../image/logo/CP.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const url = "https://331469095208424e8daa5550d43a0c3e.api.mockbin.io/";

      const response = await fetch(url);
      const existingData = await response.json();
      const newContact = {
        name,
        email,
        message,
        id: existingData.Contact.length + 1,
      };

      const updatedContactData = {
        ...existingData,
        Contact: [...existingData.Contact, newContact],
      };

      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedContactData),
      });
      setName("");
      setEmail("");
      setMessage("");
      window.alert(`Terima Kasih ${name} sudah mengisi form!!`);
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
      </main>
    </>
  );
}

export default Contact;
