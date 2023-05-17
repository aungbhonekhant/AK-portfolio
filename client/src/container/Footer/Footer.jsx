import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { FooterComponent } from "../../components";
import { PrimaryBg } from "../../components/globelStyle";
import { slideIn } from "../../Utils/motion";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    client.create(contact).then(() => {
      emailjs
        .send(
          serviceId,
          templateId,
          {
            from_name: name,
            to_name: "Aung Khant",
            from_email: email,
            to_email: "aungbhonekhant.dev@gmail.com",
            message: message,
          },
          publicKey
        )
        .then(
          () => {
            setLoading(false);
            setIsFormSubmitted(true);
            setIsErr(false);
          },
          (error) => {
            setLoading(false);
            console.error(error);

            setIsErr(true);
          }
        );
    });
  };

  return (
    <>
      <FooterComponent.HeadText>
        <span>Contact Me,</span>
        <br />
        Let's Make Magic Together
      </FooterComponent.HeadText>
      <FooterComponent.Cards>
        <FooterComponent.Card
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true, amount: 0.25 }}
        >
          <img src={images.email} alt="email" />
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
          <img src={images.mobile} alt="mobile" />
          <FooterComponent.SpecialAnchor href="tel: +95 9776612936">
            +95 9776612936
          </FooterComponent.SpecialAnchor>
        </FooterComponent.Card>
      </FooterComponent.Cards>

      {!isErr ? (
        !isFormSubmitted ? (
          <FooterComponent.Form>
            <FooterComponent.FooterInputContainer>
              <FooterComponent.FormInput
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={handleChangeInput}
              />
            </FooterComponent.FooterInputContainer>

            <FooterComponent.FooterInputContainer>
              <FooterComponent.FormInput
                type="text"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleChangeInput}
              />
            </FooterComponent.FooterInputContainer>

            <FooterComponent.FooterInputContainer>
              <FooterComponent.FormTextarea
                placeholder="Your message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </FooterComponent.FooterInputContainer>
            <FooterComponent.SubmitBtn type="button" onClick={handleSubmit}>
              {loading ? "Sending" : "Send Message"}
            </FooterComponent.SubmitBtn>
          </FooterComponent.Form>
        ) : (
          <div>
            <FooterComponent.HeadText>
              Thank you for getting in touch!
            </FooterComponent.HeadText>
          </div>
        )
      ) : (
        <div>
          <FooterComponent.HeadText>
            Ahh, something went wrong. Please try again.
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
