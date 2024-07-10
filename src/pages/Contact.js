import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="px-5 mx-4">
      <h1 className="abouts">Contact</h1>
      <h6>If you have any questions, feel free to reach out.</h6>
      <hr></hr>
      <ul>
    <li><strong><b>Gmail:</b></strong> <a href="https://mail:limacomisal@gmail.com" target="_blank" rel="noopener noreferrer">limacomisal@gmail.com</a></li>

    <li><strong><b>Facebook:</b></strong> <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer">ja</a></li>
    <li><strong><b>Tiktok:</b></strong> <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">@ja</a></li>
    <li><strong><b>Instagram:</b></strong> <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">@ja</a></li>
    <li><strong><b>Contact Number:</b></strong> 09655249954</li>
</ul>

      <hr></hr>
      <br></br>
    </Container>
  );
}

export default Contact;
