import { useRef } from 'react';
import recentProjectsData from "./recentProjectsData";


function Carousel () {
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleLeftArrowClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= 400; // Adjust the scroll distance as needed
        }
    };

    const handleRightArrowClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += 800; // Adjust the scroll distance as needed
        }
    };

    return (
        <div className="project-carousel-container carousel" ref={carouselRef}>
            {recentProjectsData.map((project, index) => (
                <div className="project-box carousel-item" key={index}>
                {index !== 0 ? <div className="arrow left-arrow" onClick={handleLeftArrowClick}>←</div> : null}
                {index !== recentProjectsData.length-1 ? <div className="arrow right-arrow" onClick={handleRightArrowClick}>→</div> : null}
                    <div className="project-box-info">
                        <h5 className="project-title primaryfontcol">{project.title}</h5>
                        <p className="secondaryfontcol">{project.information}</p>
                        <div className="subsection">
                            <span className="project-sub-heading primaryfontcol">TECHNOLOGIES:</span>
                            <span className="project-information secondaryfontcol">{project.technologies}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading primaryfontcol">FEATURES:</span>
                            <span className="project-information secondaryfontcol">{project.features}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading primaryfontcol">COLLABORATORS:</span>
                            <span className="project-information secondaryfontcol">{project.collaborators}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading primaryfontcol">LEARNINGS:</span>
                            <span className="project-information secondaryfontcol">{project.collaborators}</span>
                        </div>
                        <div className="subsection">
                            <span className="project-sub-heading primaryfontcol">URL:</span>
                            <span className="project-information secondaryfontcol">{project.url}</span>
                        </div>
                    </div>
                    <div className="project-image" style={{backgroundImage: `url('../${project.fileName}')`}}>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function RecentProjectsCarousel() {
    return (
        <section className="projects-container">
            <h4 className="recentprojecttitle primaryfontcol">
                Recent projects
            </h4>
            <Carousel />
        </section>
    );
}