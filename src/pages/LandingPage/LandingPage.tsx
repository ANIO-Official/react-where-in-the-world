import Card from "../../components/Card/Card";
import SearchAndFilterBar from "../../components/SearchAndFilterBar/SearchAndFilterBar";
import './LandingPage.css'

export default function LandingPage() {
  return (
    <>
      <SearchAndFilterBar />
      <section id="main-content-container" className="row pt-4">
        <div id="card-grid-container">
          <ul id="cards-batch" className="row row-cols-4">
            <h2>Loading Country Data...Please Wait (￣o￣) . z Z</h2>
            <Card/>
          </ul>
        </div>
      </section>
    </>
  );
}
