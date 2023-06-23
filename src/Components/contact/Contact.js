import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    setname("");
    setemail("");
    setmsg("");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4m1m20l",
        "template_cxi84wm",
        form.current,
        "GMM_73ULWtumX4F72"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <form method="POST" ref={form} onSubmit={(sendEmail, onSubmit)}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Mail"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            value={msg}
            onChange={(e) => setmsg(e.target.value)}
          ></textarea>
          <div style={{ textAlign: "center" }}>
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
