

export default function RecentProjects () {

    return (
        <section className="projects-container">
        <h4 className="recentprojecttitle primaryfontcol">
            Recent projects
        </h4>
        <div className="project-box">
            <div className="arrow left-arrow">←</div>
            <div className="arrow right-arrow">→</div>
            <div className="project-box-info">
                <h4 className="project-title primaryfontcol">Solar Energy Visualiser</h4>
                <p className="secondaryfontcol">Awesun Solar Energy Visualiser displays the latest solar PV generation statistics in half-hourly increments between the hours of 9am and 5pm. Three views are presented (weekly, monthly and yearly), as well as their peak production statistics for those periods. The size of the sun changes depending on how much energy has been produced on the current day, relative to the annual high.                                </p>
                <div className="subsection">
                    <span className="project-sub-heading primaryfontcol">Technologies used: 
                    </span>
                    <span className="project-information secondaryfontcol">React, Next JS, TypeScript, Node JS, Fetch API, CSS Animations</span>
                </div>
                <div className="subsection">
                    <span className="project-sub-heading primaryfontcol">Features: 
                    </span>
                    <span className="project-information secondaryfontcol">responsiveness, live updates, animations, daily/monthly/yearly views</span>
                </div>
            </div>
            <div className="project-image">
            </div>
        </div>
    </section>
)


}