// Composant Projects.jsx avec scroll-margin-top et padding-top pour visibilité mobile
import Style from './ProjectsStyles.module.css';
import ProjectCard from './projectCard/ProjectCard';

import gameForge from '../assets/projects/gameForge.png';
import fruitCollectionGame from '../assets/projects/fruitCollectionGame.png';
import interactiveWeatherApplication from '../assets/projects/InteractiveWeatherApplication.png';
import portfolioWebSite from '../assets/projects/portfolioWebSite.png';
import zombieDefenseGame from '../assets/projects/zombieDefenseGame.png';
import Gdoc from '../assets/projects/G-Doc.png';

function Projects() {
  return (
    <div className={Style.projects} id="projects" style={{ scrollMarginTop: '130px', paddingTop: '130px' }}>
        <h1 className={Style.title}>Projects</h1>

        <div className={Style.fProjects}>
            <ProjectCard 
                ImgSource={fruitCollectionGame} 
                ProjectName="Fruit Collection Game" 
                ProjectDescription={
                    <>A Node.js game project where a character must eat fruits while avoiding a monster. Random movement, collision logic, and score/life system included.</>
                }
                TechnoUsed={<><span className={Style.technoSpan}>Node.js</span><span className={Style.technoSpan}>CSS</span></>}
                CodeSource="https://github.com/HamzaNADIFI07/Fruit-collection-game"
                Demo="https://github.com/HamzaNADIFI07/HamzaNADIFI07/blob/main/DemoJeuFruit.jpg"
            />

            <ProjectCard 
                ImgSource={interactiveWeatherApplication} 
                ProjectName="Interactive weather application" 
                ProjectDescription={
                    <>React-based app showing meteorological data with comparisons and charts.</>
                }
                TechnoUsed={<><span className={Style.technoSpan}>React.js</span><span className={Style.technoSpan}>CSS-Modules</span><span className={Style.technoSpan}>Vite</span></>}
                CodeSource="https://github.com/HamzaNADIFI07/Interactive-Weather-Application"
                Demo="https://github.com/HamzaNADIFI07/HamzaNADIFI07/blob/main/DemoMeteo.jpg"
            />

            <ProjectCard 
                ImgSource={portfolioWebSite} 
                ProjectName="Portfolio WebSite" 
                ProjectDescription={
                    <>React portfolio website with a modern UI and smooth scroll experience.</>
                }
                TechnoUsed={<><span className={Style.technoSpan}>React.js</span><span className={Style.technoSpan}>CSS-Modules</span><span className={Style.technoSpan}>Vite</span></>}
                CodeSource="https://github.com/HamzaNADIFI07/PortFolio-WebSite"
                Demo="https://github.com/HamzaNADIFI07/PortFolio-WebSite"
            />
        </div>

        <div className={Style.sProjects}>
            <ProjectCard 
                ImgSource={gameForge} 
                ProjectName="Game Forge" 
                ProjectDescription="A modular strategy board game in Java with dynamic board generation and multiple game modes."
                TechnoUsed={<><span className={Style.technoSpan}>Java</span><span className={Style.technoSpan}>Swing</span><span className={Style.technoSpan}>Lucidchart</span></>}
                CodeSource="https://github.com/HamzaNADIFI07/GameForge-Modular-Strategy-Board-Game"
                Demo="https://github.com/HamzaNADIFI07/GameForge-Modular-Strategy-Board-Game"
            />

            <ProjectCard 
                ImgSource={zombieDefenseGame} 
                ProjectName="Zombie Defense Game" 
                ProjectDescription="Java-based zombie defense game inspired by Zombicide with simplified mechanics."
                TechnoUsed={<><span className={Style.technoSpan}>Java</span><span className={Style.technoSpan}>Lucidchart</span></>}
                CodeSource="https://github.com/HamzaNADIFI07/Zombie-Defense-Game"
                Demo="https://github.com/HamzaNADIFI07/HamzaNADIFI07/blob/25453f556142e7dbcb177bcb591b4e3548f0c06a/demoJeuZombie.odt"
            />

            <ProjectCard 
                ImgSource={Gdoc} 
                ProjectName="G-Doc" 
                ProjectDescription="Full-stack HR document generator with React frontend, Node backend and Firebase authentication."
                TechnoUsed={
                    <>
                        <div className={Style.techno1}>
                            <span className={Style.technoSpan}>React</span>
                            <span className={Style.technoSpan}>Vite</span>
                            <span className={Style.technoSpan}>CSS-Modules</span>
                        </div>
                        <div className={Style.techno2}>
                            <span className={Style.technoSpan}>React-Router-DOM</span>
                            <span className={Style.technoSpan}>Firebase</span>
                        </div>
                    </>
                }
                CodeSource="https://github.com/HamzaNADIFI07/G-Doc"
                Demo="https://g-doc.netlify.app/"
            />
        </div>
    </div>
  );
}

export default Projects;
