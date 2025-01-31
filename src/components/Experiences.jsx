import Logo from "../layout/Logo";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_4kyxxtm",
        "template_3ro5haf",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert(
            "Certaines données n'ont pas pu être récupérées. Un message d'alerte à été envoyé à l'administrateur du site."
          );
        },
        (error) => {
          console.log(error.text);
          alert(
            "Une erreur s'est produite quant à l'affichage des données. Veuillez nous en excuser."
          );
        }
      );
  };

  useEffect(() => {
    fetch("https://laurentdubosq.com/data/experiences.json", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => data.reverse())
      .then((data) => setExperiences(data))
      .catch(() => {
        sendEmail();
      });
  }, []);

  return (
    <div className="experiences-container theme-black" id="experiences">
      <section className="wrapper">
        <header>
          <h2>Expériences</h2>
        </header>
        <div className="content">
          <ul className="experiences">
            {experiences.map((experience, index) => {
              return (
                <li key={index} className="experience">
                  <div className="logo-container">
                    {experience.logo.url ? (
                      <img
                        src={experience.logo.url}
                        alt={experience.logo.alt}
                        className={"logo-" + experience.companyAcronym}
                      />
                    ) : (
                      <Logo shouldDisplayLink={false} />
                    )}
                  </div>
                  <h3>{experience.job}</h3>
                  <h4>{experience.duration}</h4>
                  <ul className="list">
                    {experience.tasks.map((task, index) => {
                      return (
                        <li
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(task),
                          }}
                        ></li>
                      );
                    })}
                  </ul>

                  {experience.links.repository && (
                    <a
                      href={experience.links.repository.url}
                      className="txt-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repository :{" "}
                      <span style={{ wordBreak: "break-all" }}>
                        {experience.links.repository.title}
                      </span>
                    </a>
                  )}

                  {experience.links.project && (
                    <a
                      href={experience.links.project.url}
                      className="txt-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website :{" "}
                      <span style={{ wordBreak: "break-all" }}>
                        {experience.links.project.title}
                      </span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <form ref={form}></form>
    </div>
  );
};

export default Experiences;
