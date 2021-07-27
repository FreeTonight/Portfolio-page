import React from "react";
import "./Info.css";
import { Button } from "./Button";

function Contact() {
  return (
    <section className="contact-me">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="icons">
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email:</div>
                  <div className="sub-title">theanh.ng30@gmail.com</div>
                </div>
              </div>

              <div className="row">
                <i className="fas fa-phone"></i>
                <div className="info">
                  <div className="head">Phone number:</div>
                  <div className="sub-title">+420 773-221-171</div>
                </div>
              </div>

              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Location:</div>
                  <div className="sub-title">Jesenice, Prague</div>
                </div>
              </div>
            </div>
          </div>

          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" required />
                </div>

                <div className="field email">
                  <input type="email" placeholder="Email" required />
                </div>
              </div>

              <div className="field">
                <input type="text" placeholder="Subject" required />
              </div>

              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Message.."
                  required
                ></textarea>
              </div>

              <div className="button-area">
                <Button
                  buttonStyle="btn--outline"
                  buttonSize="btn--medium"
                  type="submit"
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
