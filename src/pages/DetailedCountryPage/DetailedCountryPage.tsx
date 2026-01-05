//Show Detailed country view using dynamic data from URL routing &/or context

import { useNavigate, useParams } from "react-router-dom";
import "./DetailedCountryPage.css";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import useFetch from "../../custom-hooks/useFetch";
import BorderCountryButton from "../../components/BorderCountryButton/BorderCountryButton";

export default function DetailedCountryPage() {
  const navigation = useNavigate();
  const { name } = useParams();

  //utility functions
  function getLastKey(object: {}) {
    if (object !== null && object !== undefined) {
      const keysArray = Object.keys(object);
      return keysArray[keysArray.length - 1];
    }
  }

  //Return all properties of the passed object
  function getAllValues(object: {}) {
    if (object !== null && object !== undefined) {
      const allValues: any[] = Object.values(object);
      return allValues;
    }
  }
  //Get Specific country Data
  const { data, loading, error } = useFetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`
  );
  //consume the theme context
  const { theme } = useThemeContext();
  return (
    <main className={`${theme === "light" ? "dark" : "light"}`}>
      <section id="country-details-container" className="row">
        <div id="back-button-container" className="col-12 d-flex">
          <button onClick={() => navigation(-1)} id="back-button">
            ⇽ Back
          </button>
        </div>
        {loading ? (
          <p>Loading Country Data...🌎</p>
        ) : error ? (
          <p>Error Loading Countru Data! 🚫</p>
        ) : (
          data.length && (
            <>
              <div id="detail-image-container" className="col-md-6 text-start">
                <img
                  src={data[0].flags.png}
                  id="flag-img"
                  alt={data[0].flags.alt}
                />
              </div>
              <div
                id="detail-information-container"
                className="col-md-6 row-cols-md text-start"
              >
                <div id="detail-country-name-container" className="row">
                  {/*Change to Dynamic Value */}
                  <p id="detail-country-name">
                    {name && name[0].toUpperCase() + name.slice(1)}
                  </p>
                </div>
                <div id="detail-panels-container" className="row">
                  <div id="detail-panel-left" className="col-md-6">
                    <h2 id="information-left">
                      {/*Change All to Dynamic Values */}
                      <b>Native Name:</b>{" "}
                      {`${
                        data[0].name.nativeName[
                          data[0].name.nativeName &&
                            getLastKey(data[0].name.nativeName)
                        ].common
                      }`}
                      <br />
                      <br />
                      <b>Population:</b> {data[0].population}
                      <br />
                      <br />
                      <b>Region:</b> {data[0].region}
                      <br />
                      <br />
                      <b>Sub Region:</b> {data[0].subregion}
                      <br />
                      <br />
                      <b>Capital:</b> {data[0].capital[0]}
                      <br />
                    </h2>
                  </div>
                  <div id="detail-panel-right" className="col-md-6">
                    <h2 id="information-right">
                      {/*Change to Dynamic Values */}
                      <b>Top Level Domain:</b> {data[0].tld[0]}
                      <br />
                      <br />
                      <b>Currencies:</b>{" "}
                      {
                        data[0].currencies[
                          data[0].currencies && getLastKey(data[0].currencies)
                        ]?.name
                      }
                      <br />
                      <br />
                      {/*Change to Dynamic Values */}
                      <b>Languages:</b>{" "}
                      {getAllValues(data[0].languages)?.join(", ")}
                      <br />
                    </h2>
                  </div>
                  <div
                    id="detail-panel-bottom"
                    className="col-md-12 d-flex flex-column flex-md-row align-items-md-baseline"
                  >
                    <h2 className="pe-4">
                      <b>Border Countries:</b>
                    </h2>
                    <div id="detail-border-countries" className="row">
                      {/*                   
                    Refactor Update: JSX map the country's border 
                    countries into <p> or <button> elements.
                    Each needs to be within a <Link> to lead to their
                    respective country's detailed page.
                    */}
                      {data[0].hasOwnProperty("borders") ? (
                        data[0].borders.map((cca3: string) => (
                          <BorderCountryButton cca3={cca3} />
                        ))
                      ) : (
                        <p className="col-12">
                          {" "}
                          This country has no bordering countries. How
                          lonely!(_　_)。゜zｚＺ
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        )}
      </section>
    </main>
  );
}
