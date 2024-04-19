import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4kyxxtm",
        "template_t9dt45q",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert(
            "Message Envoyé avec Succès ! Je vous recontacte dès que possible."
          );
        },
        (error) => {
          console.log(error.text);
          alert(
            "Une erreur s'est produite. Veuillez ré-essayer ou m'envoyer directement un email à laurent.dubosq@gmail.com"
          );
        }
      );
  };

  return (
    <div className="contact-container theme-black" id="contact">
      <section className="wrapper">
        <header>
          <h2>Me contacter</h2>
        </header>
        <div className="content">
          <div className="text">
            <h3>Pour rentrer en contact</h3>
            <p>
              Si vous êtes intéressé(e) par mon profil et souhaitez rentrer en
              contact avec moi pour un poste de développeur front-end, vous pouvez me contacter directement
              depuis les informations ci-dessous ou bien utiliser le formulaire
              apprété.
            </p>
            <ul>
              <li className="fa-solid">
                <h4>Nom</h4>
                <p className="txt-nowrap">Laurent Dubosq</p>
              </li>
              <li className="fa-solid">
                <h4>Ville de résidence</h4>
                <p>Limay (78), France</p>
              </li>
              <li className="fa-solid">
                <h4>Portable</h4>
                <p>
                  <a href="tel:0670318105" className="txt-primary">
                    06 70 31 81 05
                  </a>
                </p>
              </li>
              <li className="fa-solid email">
                <h4>Email</h4>
                <p>
                  <a
                    href="mailto:laurent.dubosq@gmail.com"
                    className="txt hyphens-man"
                  >
                    laurent.dubosq&shy;@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h3>M'envoyer un message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Nom"
                required
                name="name"
                autoComplete="off"
              />
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                autoComplete="off"
              />
              <textarea
                placeholder="Message.."
                required
                name="message"
              ></textarea>
              <button className="btn">Envoyer</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
