import Card from "../../components/Card/Card";
import SearchAndFilterBar from "../../components/SearchAndFilterBar/SearchAndFilterBar";
import { useThemeContext } from "../../context/ThemeContext";
import './LandingPage.css'

export default function LandingPage() {
    //consume the theme context
    const { theme } = useThemeContext()
  return (
    <main className={`${theme === 'light' ? 'dark' : 'light'}`}>
      <SearchAndFilterBar />
      <section id="main-content-container" className="row pt-4">
        <div id="card-grid-container">
          <ul id="cards-batch" className="row row-cols-4">
            {/*loading? 
            <h2>Loading Country Data...Please Wait (￣o￣) . z Z</h2> : */}
            <Card/>
          </ul>
        </div>
      </section>
    </main>
  );
}
