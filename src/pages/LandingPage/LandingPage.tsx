import Card from "../../components/Card/Card";
import SearchAndFilterBar from "../../components/SearchAndFilterBar/SearchAndFilterBar";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import useFetch from "../../custom-hooks/useFetch";
import "./LandingPage.css";
import { useFilterContext } from "../../context/FilterContext/FilterContext";
import { useState } from "react";

export default function LandingPage() {
  //consume the theme context
  const { theme } = useThemeContext();

  const { currentFilter } = useFilterContext();

  const [cardsLength, setCardsLength] = useState(0);

  const updateCardCount = (event: React.SyntheticEvent<HTMLUListElement>) => {
    const newLength = event.currentTarget.childElementCount;
    setCardsLength(newLength);
  };

  //Get All the country Data
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
  );

  return (
    <main className={`${theme === "light" ? "dark" : "light"}`}>
      <SearchAndFilterBar />
      <section id="main-content-container" className="row pt-4">
        <div id="card-grid-container">
          <ul
            id="cards-batch"
            onBlur={updateCardCount}
            className="row row-cols-4"
          >
            {loading ? (
              <p
                key="loadingText"
                className="col-12"
                style={{ width: "max-content" }}
              >
                Loading Country Data...
                <br />
                Please Wait (￣o￣) . z Z
              </p>
            ) : error ? (
              <p
                key="errorText"
                className="col-12"
                style={{ width: "max-content" }}
              >
                Error Loading Country Data 🚫
              </p>
            ) : data.filter((obj) =>
                obj.name.common
                  .toLowerCase()
                  .includes(currentFilter.toLowerCase())
              ).length === 0 ? (
              <div id="no-results-container" className="d-flex flex-column justify-content-center align-items-center col-12">
                <p id="no-results-title">No Results</p>
                <p
                  key="noresultsText"
                  className="col-12"
                  style={{ width: "max-content" }}
                >
                  Tough luck! 🍀
                  <br/>
                  That country doesn't exist yet. ○|￣|_ (。_。)(＃°Д°)
                  <br/>
                  Perhaps check your spelling. 🐝
                </p>
              </div>
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
                      key={`${obj.cca3}-card`}
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
                      key={`${obj.cca3}-card`}
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
