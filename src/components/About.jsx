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
              Évoluer sur des librairies{" "}
              <span className="color-emphased">d'avenir</span>
            </h3>
            <p>
              Après 7 années en tant que développeur front-end et intégrateur
              emailing pour le groupe Photobox, puis la création d'
              <a
                href="https://www.awakningjewelry.com/"
                target="_blank"
                className="txt-primary"
                rel="noreferrer"
              >
                Awakningjewelry.com
              </a>
              , j’ai recentré mon activité professionnelle sur le développement
              front-end en conservant une activité entrepreneuriale sur mon
              temps libre. Cela me permet d’évoluer techniquement avec des
              bibliothèques comme Vue.js, Svelte ou React, tout en développant
              des compétences dans des domaines connexes.
            </p>
            <div className="cta">
              <a
                href="https://www.laurentdubosq.com/files/cv-laurent-dubosq-developpeur-front-end-vue-svelte-react.pdf"
                download="cv-laurent-dubosq-developpeur-front-end-vue-svelte-react.pdf"
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
