import './App.css'
import Links from './components/Links'
import RecentProjects from './components/RecentProjects'
function App() {

  return (
    <>
      <div className="lilypad">
        <div className="overlay">
            <div className="menu-container">
                <h1 className="calligraphy-font primaryfontcol">James Diffey</h1>
                <Links></Links>
                <RecentProjects></RecentProjects>
            </div>
        </div>
    </div>

    

      
    </>
  )
}

export default App
