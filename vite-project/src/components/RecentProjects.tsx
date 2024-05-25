import recentProjectsData from "./recentProjectsData"


import { useState } from "react"
export default function RecentProjects () {
    const [projectIndex, setProjectIndex] = useState(0)

    function handleStateIncrease () {
        if(projectIndex < recentProjectsData.length-1) {
            setProjectIndex(prev => prev+1 )
        } else {
            setProjectIndex(0)
        }
    }
    function handleStateDecrease () {
        if(projectIndex > 0) {
            setProjectIndex(prev => prev-1 )
        } else {
            setProjectIndex(recentProjectsData.length-1)
        }
    }


    return (
        <section className="projects-container">
        <h4 className="recentprojecttitle primaryfontcol">
            Recent projects
        </h4>
        <div className="project-box">
            <div className="arrow left-arrow" onClick={handleStateDecrease}>←</div>
            <div className="arrow right-arrow" onClick={handleStateIncrease}>→</div>
            <div className="project-box-info">
                <h5 className="project-title primaryfontcol">{recentProjectsData[projectIndex].title}</h5>
                <p className="secondaryfontcol"> {recentProjectsData[projectIndex].information} </p>
                <div className="subsection">
                    <span className="project-sub-heading primaryfontcol">TECHNOLOGIES: 
                    </span>
                    <span className="project-information secondaryfontcol"> {recentProjectsData[projectIndex].technologies}</span>
                </div>
                <div className="subsection">
                    <span className="project-sub-heading primaryfontcol">FEATURES:
                    </span>
                    <span className="project-information secondaryfontcol"> {recentProjectsData[projectIndex].features}</span>
                </div>
            </div>
            <div className="project-image">
            </div>
        </div>
    </section>
)


}