const About = () => {
  return (
    <div className="about-container theme-white" id="about">
      <section className="wrapper">
        <header>
          <h2>À propos</h2>
        </header>
        <div className="content">
          <picture>
            <source
              media="(max-width: 399px)"
              srcSet="./img/portrait-laurent-dubosq-250w.jpg, ./img/portrait-laurent-dubosq-500w.jpg 2x"
            />
            <source
              media="(min-width: 400px)"
              srcSet="./img/portrait-laurent-dubosq-400w.jpg, ./img/portrait-laurent-dubosq-800w.jpg 2x"
            />
            <img
              src="./img/portrait-laurent-dubosq-800w.jpg"
              alt="Portrait de Laurent Dubosq"
            />
          </picture>
          <div className="text">
            <h3>
              Évoluer sur des librairies <span className="color-emphased">d'avenir</span>
            </h3>
            <p>Après 7 années en tant qu'intégrateur web pour le groupe Photobox, puis m’être formé à l’entrepreneuriat à travers la création de la marque <a
                href="https://www.awakningjewelry.com/"
                target="_blank"
                className="txt-primary"
                rel="noreferrer"
              >
                Awakningjewelry.com
              </a> et de son site e-commerce, j’ai recentré mon activité professionnelle en revenant à mes débuts, le front-end. Ainsi je peux continuer d’évoluer techniquement en participant au développement de marque/business à travers l'évolution de leurs sites web par l'emploi du langage Javascript et de librairies innovantes telles que Vue.js, Svelte.js ou React.js.
            </p>
            <div className="cta">
              <a
                href="https://www.laurentdubosq.com/files/cv-laurent-dubosq-developpeur-front-end-svelte-react-vue.pdf"
                download="cv-laurent-dubosq-developpeur-front-end-svelte-react-vue.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
