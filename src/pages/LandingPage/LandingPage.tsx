import Card from "../../components/Card/Card";
import SearchAndFilterBar from "../../components/SearchAndFilterBar/SearchAndFilterBar";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import useFetch from "../../custom-hooks/useFetch";
import "./LandingPage.css";
import { useFilterContext } from "../../context/FilterContext/FilterContext";

export default function LandingPage() {
  //consume the theme context
  const { theme } = useThemeContext();

  const { currentFilter } = useFilterContext();
  console.log(currentFilter);

  //Get All the country Data
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
  );

  return (
    <main className={`${theme === "light" ? "dark" : "light"}`}>
      <SearchAndFilterBar />
      <section id="main-content-container" className="row pt-4">
        <div id="card-grid-container">
          <ul id="cards-batch" className="row row-cols-4">
            {loading ? (
              <li
                key="loadingText"
                className="col-12"
                style={{ listStyle: "none", width: "max-content" }}
              >
                Loading Country Data...
                <br />
                Please Wait (￣o￣) . z Z
              </li>
            ) : error ? (
              <li
                key="errorText"
                className="col-12"
                style={{ listStyle: "none", width: "max-content" }}
              >
                Error Loading Country Data 🚫
              </li>
            ) : //Filter By Region Select when the filter is set to any of the following values.
              currentFilter === "Africa" ||
              currentFilter === "America" ||
              currentFilter === "Asia" ||
              currentFilter === "Europe" ||
              currentFilter === "Oceania" ? (
              data.map(
                (obj) =>
                  obj.region.includes(currentFilter) && (
                    <Card
                      img={obj.flags.png}
                      name={obj.name.common}
                      population={obj.population}
                      region={obj.region}
                      capital={obj.capital[0]}
                      cca3={obj.cca3}
                    />
                  )
              )
            ) : currentFilter !== "" ? ( //search bar typing search
              data.map(
                (obj) =>
                  obj.name.common
                    .toLowerCase()
                    .includes(currentFilter.toLowerCase()) && (
                    <Card
                      img={obj.flags.png}
                      name={obj.name.common}
                      population={obj.population}
                      region={obj.region}
                      capital={obj.capital[0]}
                      cca3={obj.cca3}
                    />
                  )
              )
            ) : (
              //show all
              data.map((obj) => (
                <Card
                  img={obj.flags.png}
                  name={obj.name.common}
                  population={obj.population}
                  region={obj.region}
                  capital={obj.capital[0]}
                  cca3={obj.cca3}
                  key={`${obj.cca3}-card`}
                />
              ))
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
