import Card from "../../components/Card/Card";
import SearchAndFilterBar from "../../components/SearchAndFilterBar/SearchAndFilterBar";
import { useThemeContext } from "../../context/ThemeContext";
import useFetch from "../../custom-hooks/useFetch";
import type { countryDataStructure } from "../../types";
import "./LandingPage.css";

export default function LandingPage() {
  //consume the theme context
  const { theme } = useThemeContext();

  //Get All the country Data
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders"
  );

  return (
    <main className={`${theme === "light" ? "dark" : "light"}`}>
      <SearchAndFilterBar />
      <section id="main-content-container" className="row pt-4">
        <div id="card-grid-container">
          <ul id="cards-batch" className="row row-cols-4">
            {loading ? (
              <h2>
                Loading Country Data...
                <br />
                Please Wait (￣o￣) . z Z
              </h2>
            ) : error ? (
              <h2>Error Loading Country Data 🚫</h2>
            ) : (
              data.map((obj: countryDataStructure, index) => (
                <Card
                  img={obj.flags.png}
                  name={obj.name.common}
                  population={obj.population}
                  region={obj.region}
                  capital={obj.capital[0]}
                  index = {index}
                />
              ))
            )}
            {/* <Card /> */}
          </ul>
        </div>
      </section>
    </main>
  );
}
