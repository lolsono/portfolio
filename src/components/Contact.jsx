import { createElement, useRef } from "react";
import { content } from "../Content";

const Contact = () => {
  const { Contact } = content;

  return (
    <section className="bg-dark_primary text-white" id="contact">

      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          Contacter moi !
        </h2>

        <br />

        <div className="flex gap-10 md:flex-row flex-col">
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <p className="text-white text-4xl">{createElement(content.icon)}</p>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
