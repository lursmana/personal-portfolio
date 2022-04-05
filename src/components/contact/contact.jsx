import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dci9jnr",
        "template_ifupm3o",
        form.current,
        "SyG-EPc6mkCUEqEJz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className=".contact__potion-icon" />
            <h4>Email</h4>
            <h5>giolursmani@gmail.com</h5>
            <a href="mailto:giolursmani@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className=".contact__potion-icon" />
            <h4>Messenger</h4>
            <h5>Giorgi Lursmanashvili</h5>
            <a href="https://m.me/giorgi.lursmanashvili.14" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className=".contact__potion-icon" />
            <h4>Whatsapp</h4>
            <h5>+995 598 71 24 33</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+598712433"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
