import Links from "./Links"
import RecentProjectscrsl from "./RecentProjectsCarousel"

export default function LilypadAndWater () {

    return (
    <div className="lilypad-and-water-background">
        <div className="lilypad-overlay black-menu-placement-styles">
            <div className="black-menu-container">
                <h1 className="black-menu-font-james-diffey">James Diffey</h1>
                <Links></Links>
                <hr></hr>
                <RecentProjectscrsl></RecentProjectscrsl>
            </div>
        </div>
    </div>      
    )
}