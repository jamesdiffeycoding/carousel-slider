import { useRef, useState, useEffect } from 'react';
import recentProjectsData from "./recentProjectsData";

export default function RecentProjectsCrsl() {
    const [scrollDistance, setScrollDistance] = useState(window.innerWidth); // Initialize scrollDistance using useState
    const crslRef = useRef<HTMLDivElement>(null);

    const handleLeftArrowClick = () => {
        if (crslRef.current) {
            crslRef.current.scrollLeft -= scrollDistance; // Use scrollDistance from state
        }
    };

    const handleRightArrowClick = () => {
        if (crslRef.current) {
            crslRef.current.scrollLeft += scrollDistance; // Use scrollDistance from state
        }
    };

    const calculateScrollDistance = () => {
        const viewportWidth = window.innerWidth;
        setScrollDistance(viewportWidth)
        return viewportWidth;
    };

    useEffect(() => {
        window.addEventListener('resize', calculateScrollDistance);
        return () => {
            window.removeEventListener('resize', calculateScrollDistance);
        };
    }, []);

    return (
        <section className="projects-container">
            <h4 className="recent-projects-title">Recent projects {scrollDistance}</h4>
            <div className="crsl" ref={crslRef}>
                {recentProjectsData.map((project, index) => (
                    <section className="crsl-item" key={index}>
                        {index !== 0 ? <div className="crsl-arrow crsl-arrow-left button-style-and-hover" onClick={() => handleLeftArrowClick()}>←</div> : null}
                        {index !== recentProjectsData.length - 1 ? <div className="crsl-arrow crsl-arrow-right button-style-and-hover" onClick={() => handleRightArrowClick()}>→</div> : null}
                        <div className="crsl-lhs-information">
                        <h5 className="crsl-project-title ">{project.title}</h5>
                        <p className="">{project.information}</p>
                        <div className="subsection">
                            <span className="project-sub-heading ">TECHNOLOGIES: </span>
                            <span className="project-information ">{project.technologies}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading ">FEATURES: </span>
                            <span className="project-information ">{project.features}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading ">COLLABORATORS:</span>
                            <span className="project-information ">{project.collaborators}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading ">LEARNINGS: </span>
                            <span className="project-information ">{project.learnings}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading">URL: </span>
                            <a href={project.url} className="project-information" target="_blank" rel="noopener noreferrer">
                                {project.url}
                            </a>
                        </div>
                    </div>
                    <div className="crsl-rhs-project-image" style={{backgroundImage: `url('../${project.fileName}')`}}>
                    </div>
                </section>
                ))}
            </div>
        </section>
    );
}
