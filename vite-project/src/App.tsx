import './App.css'
import Links from './components/Links'
import RecentProjectsCarousel from './components/RecentProjectsCarousel'
function App() {

  return (
    <>
      <div className="lilypad">
        <div className="overlay">
            <div className="menu-container">
                <h1 className="calligraphy-font primaryfontcol">James Diffey</h1>
                <Links></Links>
                <RecentProjectsCarousel></RecentProjectsCarousel>
            </div>
        </div>
    </div>

    

      
    </>
  )
}

export default App
