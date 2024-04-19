import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const jobsWriter = () => {
      const target = document.querySelector(".jobs-writer");

      let jobList = ["Développeur Front-End Vue", "Développeur Front-End Svelte",  "Développeur Front-End React"];
      let indexJob = 0;
      let indexLetter = jobList[0].length;
      let timerPause = 0; 

      const letterWriting = () => {
        target.textContent += jobList[indexJob][indexLetter];
        indexLetter++;
      };

      const letterWritingPause = () => {
        timerPause++;
      };

      const letterErasing = () => {
        target.textContent = target.textContent.slice(0, -1);
        indexLetter--;
        if (indexLetter === 21 && indexJob !== jobList.length - 1) {
          indexJob++;
          timerPause = 0;
        } else if (indexLetter === 21 && indexJob === jobList.length - 1) {
          indexJob = 0;
          timerPause = 0;
        }
      };
      setInterval(() => {
        if (indexLetter === jobList[indexJob].length && timerPause !== 16) {
          letterWritingPause();
        } else if (timerPause === 16 && indexLetter > 21) {
          letterErasing();
        } else {
          letterWriting();
        }
      }, 100);
    };
    jobsWriter();
  }, []);

  return (
    <div className="hero-container" id="hero">
      <section className="wrapper">
        <p>Hello, je m'appelle</p>
        <h1>Laurent Dubosq</h1>
        <div>
          et je suis{" "}
          <h2 className="jobs-writer color-emphased">Développeur Front-End Vue</h2>
        </div>
        <div className="ctas">
          <a href="#contact" className="btn">
            Me recruter
          </a>
          <a
            href="https://www.laurentdubosq.com/files/cv-laurent-dubosq-developpeur-front-end-svelte-react-vue.pdf"
            download="cv-laurent-dubosq-developpeur-front-end-svelte-react-vue.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn btn-off"
          >
            Télécharger mon CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
