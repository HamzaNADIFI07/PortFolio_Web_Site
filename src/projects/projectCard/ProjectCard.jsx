import Style from './ProjectCardStyles.module.css'
import PropTypes from 'prop-types'

function ProjectCard({ImgSource, ProjectName, ProjectDescription, TechnoUsed, CodeSource, Demo}) {
  
  ProjectCard.propTypes = {
    ImgSource: PropTypes.string.isRequired,
    ProjectName: PropTypes.string.isRequired,
    ProjectDescription: PropTypes.string.isRequired,
    TechnoUsed: PropTypes.node.isRequired,
    CodeSource: PropTypes.string.isRequired,
    Demo: PropTypes.string.isRequired
  }
  
  return (
    <div className={Style.projectCard}>
        <img className={Style.projectImg} src={ImgSource} alt={ProjectName} />
        <h3 className={Style.projectName}>{ProjectName}</h3>
        <div className={Style.techno}>{TechnoUsed}</div>
        <p className={Style.projectDescription}>{ProjectDescription}</p>
        <a href={CodeSource}>
            <button className={Style.codeSource}>Code Source</button>
        </a>
        <a href={Demo}>
            <button className={Style.demo}>Demo</button>
        </a> 
    </div>
  )
}

export default ProjectCard