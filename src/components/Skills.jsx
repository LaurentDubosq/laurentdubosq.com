import { useEffect, useRef, useState } from "react";
import Gauges from "./Gauges";
import emailjs from "@emailjs/browser";

const Skills = () => {
  const [data, setData] = useState([]);
  const form = useRef();
  const leftColumnCategories = ["libraries", "dependencies", "languages", "preprocessor", "versioning", "internationalization-tools", "collaborative-tools"]
  const rightColumnCategories = ["sofwares", "cms", "marketing-tools", "methodologies", "css-convention", "principles", "environments", "design-systems", "interest", "language", "certification", "degree"]

  const leftColumnData = data.filter(dataCategory => leftColumnCategories.includes(dataCategory.id))
  const RighColumnData = data.filter(dataCategory => rightColumnCategories.includes(dataCategory.id))

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
        setData(data)
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
              Mes années dans le web démontrent mon goût pour la création de site web et cette expérience me motive à continuer de développer mes compétences techniques et relationnelles. Lors de ma dernière expérience au sein de Decathlon Belgique, j'ai pu mettre en application et valider mes compétences acquises dans le développement front à l'aide de la librairie Svelte.js, de me familiariser avec un environnement complexe en matière d'outils et d'infrastructure, tout en évoluant hors de ma zone de confort, à l'étranger, où il faut savoir s'adapter à d'autres cultures, voire d'autres langues. Depuis, je continue de me former en front-end et je viens de valider une certification <a href="https://www.laurentdubosq.com/files/certification-vue-level-1-laurent-dubosq.pdf" target="_blank" className="txt-primary" rel="noreferrer">"Vue.js Developer Level 1"</a>. Je reste à l'écoute du marché quant à pouvoir collaborer avec des entreprises qui me permettront de gagner en expérience.
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
