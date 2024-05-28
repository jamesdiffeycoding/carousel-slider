import { useRef, useState, useEffect } from 'react';
import recentProjectsData from "./recentProjectsData";
import workHistoryData from './workHistoryData';
import skillsData from './skillsData';
export default function Carousel () {
    const [chosenCarouselString, setChosenCarouselString] = useState("projects")
    const [scrollDistance, setScrollDistance] = useState(window.innerWidth); // Initialize scrollDistance using useState
    const crslRef = useRef<HTMLDivElement>(null);

    const handleNewToggle = () => {
        if (crslRef.current) {
            crslRef.current.scrollLeft = 0;
        }
    }

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
        if(viewportWidth<=2000) {
            setScrollDistance(viewportWidth)
        } else {
            setScrollDistance(2000)
        }
        return viewportWidth;
    };

    useEffect(() => {
        window.addEventListener('resize', calculateScrollDistance);
        return () => {
            window.removeEventListener('resize', calculateScrollDistance);
        };
    }, []);


    

    let leftArrowSymbol="<"
    let rightArrowSymbol=">"

    let chosenCarouselData = []
    switch (chosenCarouselString) {
        case "projects":
            chosenCarouselData = recentProjectsData;
            break;
        case "history":
            chosenCarouselData = workHistoryData;
            break;
        case "skills":
            chosenCarouselData = skillsData;
            break;
        default: 
            chosenCarouselData = recentProjectsData
    }
    
    function toggleCarousel(chosenGraph: string) {
        handleNewToggle()
        setChosenCarouselString(chosenGraph)
    }

    type itemStructure = {
        title: string;
        information: string;
        fileName: string;
        heading1?: string;
        value1?: string;
        heading2?: string;
        value2?: string;
        heading3?: string;
        value3?: string;
        heading4?: string;
        value4?: string;
        heading5?: string;
        value5?: string;
        url?: string; // "?" makes property optional
    };


    return (
        <section className="projects-container">
            <div className="toggles">
                <span className="toggles-title button-style-and-hover" onClick={() => toggleCarousel("projects")}>PROJECTS</span>
                <span className="toggles-dot"> • </span>
                <span className="toggles-title button-style-and-hover" onClick={() => toggleCarousel("skills")}>SKILLS</span>
                <span className="toggles-dot"> • </span>
                <span className="toggles-title button-style-and-hover" onClick={() => toggleCarousel("history")}>INSPIRATION</span>
            </div>
            <div className="crsl" ref={crslRef}>
                {chosenCarouselData.map((item: itemStructure, index) => (
                    <section className="crsl-item" key={index}>
                        {index !== 0 ? <div className="crsl-arrow crsl-arrow-left button-style-and-hover" onClick={() => handleLeftArrowClick()}>{leftArrowSymbol}</div> : null}
                        {index !== chosenCarouselData.length - 1 ? <div className="crsl-arrow crsl-arrow-right button-style-and-hover" onClick={() => handleRightArrowClick()}>{rightArrowSymbol}</div> : null}
                        <div className="crsl-lhs-information">
                            <h5 className="crsl-project-title ">{item.title}</h5>
                            <p className="">{item.information}</p>
                            {item.heading1 && (
                                <div className="subsection">
                                <span className="project-sub-heading ">{item.heading1}: </span>
                                <span className="project-information ">{item.value1}</span>
                            </div>
                            )}    
                            {item.heading2 && (
                                <div className="subsection">
                                <span className="project-sub-heading ">{item.heading2}: </span>
                                <span className="project-information ">{item.value2}</span>
                            </div>
                            )}    
                            {item.heading3 && (
                                <div className="subsection">
                                <span className="project-sub-heading ">{item.heading3}: </span>
                                <span className="project-information ">{item.value3}</span>
                            </div>
                            )}    
                            {item.heading4 && (
                                <div className="subsection">
                                <span className="project-sub-heading ">{item.heading4}: </span>
                                <span className="project-information ">{item.value4}</span>
                            </div>
                            )}    
                            {item.heading5 && (
                                <div className="subsection">
                                <span className="project-sub-heading ">{item.heading5}: </span>
                                <span className="project-information ">{item.value5}</span>
                            </div>
                            )}    
                            {item.url && (
                                <div className="subsection">
                                    <span className="project-sub-heading">URL: </span>
                                    <a href={item.url} className="project-information" target="_blank" rel="noopener noreferrer">
                                        {item.url}
                                    </a>
                                </div>
                            )}                    
                        </div>
                    <div className="crsl-rhs-project-image" style={{ 
                        backgroundImage: `url('../${item.fileName}')`, 
                        minHeight: scrollDistance/3 >= 200 ? `${scrollDistance/3}px` : '200px' 
                    }}>
                    </div>
                </section>
                ))}
            </div>
        </section>
    );
}
