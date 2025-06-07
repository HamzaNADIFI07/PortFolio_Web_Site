import Style from './SkillsStyles.module.css'

import htmlIcon from '../assets/skills/icons8-html-100.png'
import cssIcon from '../assets/skills/icons8-css-100.png'
import jsIcon from '../assets/skills/icons8-javascript-100.png'
import typeScriptIcon from '../assets/skills/icons8-typescript-100.png'
import phpIcon from '../assets/skills/icons8-php-logo-100.png'
import javaIcon from '../assets/skills/icons8-logo-java-coffee-cup-100.png'
import pythonIcon from '../assets/skills/icons8-python-100.png'
import cIcon from '../assets/skills/icons8-c-100.png'

import reactIcon from '../assets/skills/icons8-react-native-100.png'
import angularIcon from '../assets/skills/icons8-angularjs-100.png'
import nodeIcon from '../assets/skills/icons8-nodejs-100.png'
import symfonyIcon from '../assets/skills/icons8-symfony-100.png'
import bootstrapIcon from '../assets/skills/icons8-bootstrap-100.png'
import tailwindIcon from '../assets/skills/icons8-vent-arrièrecss-100.png'

import mysqlIcon from '../assets/skills/icons8-mysql-100.png'
import mongodbIcon from '../assets/skills/icons8-mongodb-100.png'

import gitIcon from '../assets/skills/icons8-git-100.png'
import vsCodeIcon from '../assets/skills/icons8-code-studio-visuel-2019-100.png'
import eclipseIcon from '../assets/skills/icons8-eclipse-java-100.png'
import figmaIcon from '../assets/skills/icons8-figma-100.png'
import wordPressIcon from '../assets/skills/icons8-wordpress-100.png'

function Skills() {
  return (
    <div className={Style.skills}>
        <h1 className={Style.title} id='skills'>Skills</h1>
        <div className={Style.skillsContent1}>
            <div className={Style.programmingLanguages}>
                <h2>Programming Languages</h2>
                <div className={Style.icons}>
                    <div className={Style.ligne}>
                        <div className={Style.card}>
                            <img src={htmlIcon} alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className={Style.card}>
                            <img src={cssIcon} alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className={Style.card}>
                            <img src={jsIcon} alt="JavaScript" />
                            <p>JavaScript</p>
                        </div>
                    </div>
                    <div className={Style.ligne}>
                        <div className={Style.card}>
                            <img src={typeScriptIcon} alt="TypeScript" />
                            <p>TypeScript</p>
                        </div>
                        <div className={Style.card}>
                            <img src={phpIcon} alt="PHP" />
                            <p>PHP</p>
                        </div>
                    </div>
                    <div className={Style.ligne}>
                        <div className={Style.card}>
                            <img src={javaIcon} alt="Java" />
                            <p>JAVA</p>
                        </div>
                        <div className={Style.card}>
                            <img src={pythonIcon} alt="Python"/>
                            <p>PYTHON</p>
                        </div>
                        <div className={Style.card}>
                            <img src={cIcon} alt="C" />
                            <p>C</p>
                        </div>
                    </div>
                
                </div>
            </div>
            <div className={Style.frameworks}>
                <h2>Frameworks</h2>
                <div className={Style.icons}>
                    <div className={Style.ligne}>
                        <div className={Style.card}>
                            <img src={reactIcon} alt="REACT" />
                            <p>REACT</p>
                        </div>
                        <div className={Style.card}>
                            <img src={angularIcon} alt="ANGULAR" />
                            <p>ANGULAR</p>
                        </div>

                    </div>
                    <div className={Style.ligne}>
                        <div className={Style.card}>
                            <img src={nodeIcon} alt="NODEJS" />
                            <p>NODE.JS</p>
                        </div>
                        <div className={Style.card}>
                            <img src={symfonyIcon} alt="SYMFONY" />
                            <p>SYMFONY</p>
                        </div>
                    </div>  
                    <div className={Style.ligne}>
                        <div className={Style.card}>
                            <img src={bootstrapIcon} alt="BOOTSTRAP" /> 
                            <p>BOOTSTRAP</p>
                        </div> 
                        <div className={Style.card}>
                            <img src={tailwindIcon} alt="TAILWIND" /> 
                            <p>TAILWIND</p>
                        </div>   
                    </div>  
                </div>
            </div>
        </div>
        <div className={Style.skillsContent2}>
            <div className={Style.databases}>
                    <h2>Databases</h2>
                    <div className={Style.icons}>
                        <div className={Style.ligne}>
                            <div className={Style.card}>
                                <img src={mysqlIcon} alt="MYSQL" />
                                <p>MYSQL</p>
                            </div>
                            <div className={Style.card}>
                                <img src={mongodbIcon} alt="MONGODB" />
                                <p>MONGODB</p>
                            </div> 
                        </div>  
                    </div>
            </div>
            <div className={Style.toolsDevelopment}>
                    <h2>Tools & Development</h2>
                    <div className={Style.icons}>
                        <div className={Style.ligne}>
                            <div className={Style.card}>
                                <img src={gitIcon} alt="GIT" />
                                <p>GIT</p>
                            </div> 
                            <div className={Style.card}>
                                <img src={vsCodeIcon} alt="VSCODE" /> 
                                <p>VSCODE</p>
                            </div> 
                            <div className={Style.card}>
                                <img src={eclipseIcon} alt="ECLIPSE" />
                                <p>ECLIPSE</p>
                            </div>   
                        </div>  
                        <div className={Style.ligne}>
                            <div className={Style.card}>
                                <img src={figmaIcon} alt="FIGMA" /> 
                                <p>FIGMA</p>
                            </div>
                            <div className={Style.card}>
                                <img src={wordPressIcon} alt="WordPress" />
                                <p>WordPress</p>
                            </div> 
                        </div>  
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Skills