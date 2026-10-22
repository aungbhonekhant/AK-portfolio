import React, { useState } from "react";

import { MdOutlineEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { AppWrap, MotionWrap } from "../../wrapper";
import { FooterComponent } from "../../components";
import { PrimaryBg } from "../../components/globelStyle";
import { slideIn } from "../../Utils/motion";

// Submissions go to Netlify Forms; the matching static form lives in
// index.html so Netlify registers "contact" at deploy time.
const encode = (data) => new URLSearchParams(data).toString();

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsErr(false);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      setIsFormSubmitted(true);
    } catch (error) {
      console.error(error);
      setIsErr(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <FooterComponent.HeadText>
        <span>Contact Me,</span>
        <br />
        Let's Build Something Together
      </FooterComponent.HeadText>
      <FooterComponent.Cards>
        <FooterComponent.Card
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true, amount: 0.25 }}
        >
          <MdOutlineEmail aria-hidden="true" />
          <FooterComponent.SpecialAnchor href="mailto:aungbhonekhant.dev@gmail.com">
            aungbhonekhant.dev@gmail.com
          </FooterComponent.SpecialAnchor>
        </FooterComponent.Card>

        <FooterComponent.Card
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true, amount: 0.25 }}
        >
          <MdOutlinePhoneIphone aria-hidden="true" />
          <FooterComponent.SpecialAnchor href="tel: +95 9776612936">
            +95 9776612936
          </FooterComponent.SpecialAnchor>
        </FooterComponent.Card>
      </FooterComponent.Cards>

      {!isFormSubmitted ? (
        <FooterComponent.Form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="bot-field"
            value={formData["bot-field"]}
            onChange={handleChangeInput}
          />
          <FooterComponent.FooterInputContainer>
            <FooterComponent.FormInput
              type="text"
              name="name"
              placeholder="Your name"
              aria-label="Your name"
              autoComplete="name"
              required
              value={name}
              onChange={handleChangeInput}
            />
          </FooterComponent.FooterInputContainer>

          <FooterComponent.FooterInputContainer>
            <FooterComponent.FormInput
              type="email"
              name="email"
              placeholder="Your email"
              aria-label="Your email"
              autoComplete="email"
              required
              value={email}
              onChange={handleChangeInput}
            />
          </FooterComponent.FooterInputContainer>

          <FooterComponent.FooterInputContainer>
            <FooterComponent.FormTextarea
              placeholder="Your message"
              aria-label="Your message"
              required
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </FooterComponent.FooterInputContainer>
          <FooterComponent.SubmitBtn type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </FooterComponent.SubmitBtn>
          {isErr && (
            <FooterComponent.FormError role="alert">
              Sorry, your message couldn't be sent. Please try again, or email
              me directly at aungbhonekhant.dev@gmail.com.
            </FooterComponent.FormError>
          )}
        </FooterComponent.Form>
      ) : (
        <div>
          <FooterComponent.HeadText>
            Thank you for getting in touch!
          </FooterComponent.HeadText>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, FooterComponent),
  "contact",
  PrimaryBg
);
