import { useEffect, useRef, useState } from "react";
import Gauges from "./Gauges";
import emailjs from "@emailjs/browser";

const Skills = () => {
  const [data, setData] = useState([]);
  const form = useRef();
  const leftColumnCategories = [
    "libraries",
    "dependencies",
    "languages",
    "preprocessor",
    "versioning",
    "internationalization-tools",
    "collaborative-tools",
    "sofwares",
  ];
  const rightColumnCategories = [
    "cms",
    "marketing-tools",
    "methodologies",
    "css-convention",
    "api",
    "a11y",
    "perfs",
    "testing",
    "principles",
    "environments",
    "design-systems",
    "interest",
    "language",
    "certification",
    "degree",
    "others",
  ];

  const leftColumnData = data.filter((dataCategory) =>
    leftColumnCategories.includes(dataCategory.id)
  );
  const RighColumnData = data.filter((dataCategory) =>
    rightColumnCategories.includes(dataCategory.id)
  );

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
    fetch("https://laurentdubosq.com/data/gauges.json", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        sendEmail();
      });
  }, []);

  return (
    <div className="skills-container theme-white" id="skills">
      <section className="wrapper">
        <header>
          <h2>Compétences</h2>
        </header>
        <div className="content">
          <div className="text">
            <h3>Mes skills et leurs évolutions</h3>
            <p>
              Mes années dans le web témoignent de mon goût pour la création de
              sites web et me motivent à continuer de développer mes compétences
              techniques et mes soft skills. Depuis l'obtention de la
              certification{" "}
              <a
                href="https://www.laurentdubosq.com/files/certification-vue-level-1-laurent-dubosq.pdf"
                target="_blank"
                className="txt-primary"
                rel="noreferrer"
              >
                "Vue.js Developer Level 1"
              </a>
              , j'acquiers de l'expérience avec Vue.js et son écosystème, en
              relevant le défi de recoder AwakningJewelry avec ces technologies.
              En parallèle, je développe des compétences en accessibilité et en
              performance, avec pour objectif à plus long terme d’explorer le
              back-end. Désireux de gagner en expérience, je reste à l’écoute du
              marché afin de collaborer avec des entreprises qui me permettront
              de monter en compétences plus rapidement en apprenant de mes
              pairs.
            </p>
          </div>

          <div className="mobile-container">
            <Gauges data={data} />
          </div>

          <div className="desktop-container">
            <Gauges data={leftColumnData} />
            <Gauges data={RighColumnData} />
          </div>
        </div>
      </section>
      <form ref={form}></form>
    </div>
  );
};

export default Skills;
