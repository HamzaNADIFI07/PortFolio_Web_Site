import Style from './ProjectsStyles.module.css'
import ProjectCard from './projectCard/ProjectCard'

import gameForge from '../assets/projects/gameForge.png'
import fruitCollectionGame from '../assets/projects/fruitCollectionGame.png'
import interactiveWeatherApplication from '../assets/projects/InteractiveWeatherApplication.png'
import portfolioWebSite from '../assets/projects/portfolioWebSite.png'
import zombieDefenseGame from '../assets/projects/zombieDefenseGame.png'
import Gdoc from '../assets/projects/G-Doc.png'

function Projects() {
  return (
    <div className={Style.projects}>
        <h1 className={Style.title} id='projects'>Projects</h1>
        <div className={Style.fProjects}>

            <ProjectCard 
                ImgSource={fruitCollectionGame} 
                ProjectName="Fruit Collection Game" 
                ProjectDescription={
                    <>
                    A Node.js game project where a character must eat fruits that randomly move within the game area to score points. The player must avoid a monster chasing them: each time the monster touches the player, they lose one life (out of the three initial lives).<br/>When the player runs out of lives, they lose the game. The game features simple and dynamic mechanics, with collision management and random movement.
                    </>
                }
                TechnoUsed={
                    <>
                        <span className={Style.technoSpan}>Node.js</span> <span className={Style.technoSpan}>CSS</span>
                    </>
                }
                CodeSource="https://github.com/HamzaNADIFI07/Fruit-collection-game"
                Demo="https://github.com/HamzaNADIFI07/HamzaNADIFI07/blob/main/DemoJeuFruit.jpg"
            />

            <ProjectCard 
                ImgSource={interactiveWeatherApplication} 
                ProjectName="Interactive weather application" 
                ProjectDescription={
                    <>
                        An interactive weather application developed with React.js that displays meteorological data for different cities (minimum temperature, maximum temperature, rainfall, sunshine, etc.) over the course of a year. The user can select a city and set it as their favorite, then compare its data with other cities. Results are presented in tables and interactive charts, providing a clear visualization of weather differences between cities.
                    </>
                }
                TechnoUsed={
                    <>
                        <span className={Style.technoSpan}>React.js</span> <span className={Style.technoSpan}>CSS-Modules</span> <span className={Style.technoSpan}>Vite</span>
                    </>
                }
                CodeSource="https://github.com/HamzaNADIFI07/Interactive-Weather-Application"
                Demo="https://github.com/HamzaNADIFI07/HamzaNADIFI07/blob/main/DemoMeteo.jpg"
            />  

            <ProjectCard 
                ImgSource={portfolioWebSite} 
                ProjectName="Portfolio WebSite" 
                ProjectDescription={
                    <>
                        An interactive weather application developed with React.js that displays meteorological data for different cities (minimum temperature, maximum temperature, rainfall, sunshine, etc.) over the course of a year. The user can select a city and set it as their favorite, then compare its data with other cities. Results are presented in tables and interactive charts, providing a clear visualization of weather differences between cities.
                    </>
                }
                TechnoUsed={
                    <>
                        <span className={Style.technoSpan}>React.js</span> <span className={Style.technoSpan}>CSS-Modules</span> <span className={Style.technoSpan}>Vite</span>
                    </>
                }
                CodeSource="https://github.com/HamzaNADIFI07/PortFolio-WebSite"
                Demo="https://github.com/HamzaNADIFI07/PortFolio-WebSite"
            />
        </div>

        <div className={Style.sProjects}>
            <ProjectCard 
                ImgSource={gameForge} 
                ProjectName="Game Forge" 
                ProjectDescription="This project is focused on designing and implementing a modular strategy board game with multiple playable variations. Players interact with a dynamically generated board, manage resources, and build structures to achieve specific objectives, depending on the game mode."
                TechnoUsed={
                    <>
                        <span className={Style.technoSpan}>Java</span> <span className={Style.technoSpan}>Swing</span> <span className={Style.technoSpan}>Lucidchart</span>
                    </>
                }
                CodeSource="https://github.com/HamzaNADIFI07/GameForge-Modular-Strategy-Board-Game"
                Demo="https://github.com/HamzaNADIFI07/GameForge-Modular-Strategy-Board-Game"
            />

            <ProjectCard 
                ImgSource={zombieDefenseGame} 
                ProjectName="Zombie Defense Game" 
                ProjectDescription={
                    <>
                        This Java project involves modeling and developing a defense game against zombie attacks. Inspired by the game Zombicide, it features simplified mechanics to offer a unique experience.
                        The project is designed to be extensible, allowing easy addition of new features.
                    </>
                }
                TechnoUsed={
                    <>
                        <span className={Style.technoSpan}>Java</span> <span className={Style.technoSpan}>Lucidchart</span>
                    </>
                }
                CodeSource="https://github.com/HamzaNADIFI07/Zombie-Defense-Game"
                Demo="https://github.com/HamzaNADIFI07/HamzaNADIFI07/blob/25453f556142e7dbcb177bcb591b4e3548f0c06a/demoJeuZombie.odt"
            />
            <ProjectCard 
                ImgSource={Gdoc} 
                ProjectName="G-Doc" 
                ProjectDescription={
                    <>
                        G-Doc is a full-stack web application designed to streamline the generation of official HR documents. Users can securely log in to the platform to generate various types of attestations, including employment certificates, salary statements, and work domiciliation letters. Built with React (Vite) on the frontend and Node.js/Express on the backend, the app uses JWT-based authentication and private routing to protect sensitive data. The project architecture is modular and scalable, making it easy to add new document types or administrative functionalities in the future.
                    </>
                }
                TechnoUsed={
                    <>
                    <div className={Style.techno1}>
                        <span className={Style.technoSpan}>React</span> <span className={Style.technoSpan}>Vite</span><span className={Style.technoSpan}>CSS-Modules</span>
                    </div>
                    <div className={Style.techno2}>
                        <span className={Style.technoSpan}>React-Router-DOM</span> <span className={Style.technoSpan}>Firebase</span>
                    </div>
                    </>
                }
                CodeSource="https://github.com/HamzaNADIFI07/G-Doc"
                Demo="https://g-doc.netlify.app/"
            />

        </div>
    </div>
  )
}

export default Projects