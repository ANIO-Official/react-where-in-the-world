//Show Detailed country view using dynamic data from URL routing &/or context

import { Link, useNavigate } from "react-router-dom";
import './DetailedCountryPage.css'

export default function DetailedCountryPage() {
  const navigation = useNavigate();

  return (
    <>
      <section id="country-details-container" className="row">
        <div id="back-button-container" className="col-12 d-flex">
          <button onClick={() => navigation(-1)} id="back-button">
            ⇽ Back
          </button>
        </div>
        {/*Change to Dynamic Value */}
        <div id="detail-image-container" className="col-md-6">
          <img src="..." id="flag-img" alt="" />
        </div>
        <div id="detail-information-container" className="col-md-6 row-cols-md">
          <div id="detail-country-name-container" className="row">
            {/*Change to Dynamic Value */}
            <p id="detail-country-name">Belgium</p>
          </div>
          <div id="detail-panels-container" className="row">
            <div id="detail-panel-left" className="col-md-6">
              <h2 id="information-left">
                {/*Change All to Dynamic Values */}
                <b>Native Name:</b> Belgie
                <br />
                <br />
                <b>Population:</b> 99,999,999
                <br />
                <br />
                <b>Region:</b> Europe
                <br />
                <br />
                <b>Sub Region:</b> Western Europe
                <br />
                <br />
                <b>Capital:</b> Berlin
                <br />
              </h2>
            </div>
            <div id="detail-panel-right" className="col-md-6">
              <h2 id="information-right">
                {/*Change to Dynamic Values */}
                <b>Top Level Domain:</b> .be
                <br />
                <br />
                <b>Currencies:</b> Euro
                <br />
                <br />
                {/*Change to Dynamic Values */}
                <b>Languages:</b> Dutch, French, German
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
                    Template Literal 
                    Styled in css
                    
                    Refactor Update: JSX map the country's border 
                    countries into <p> or <button> elements.
                    Each needs to be within a <Linl> to lead to their
                    respective country's detailed page. Example below
                    */}
                    <Link to={`/country/:name/:cca3/detailed-view`}>
                      <button 
                      className="detail-border-country col-4">
                        borderCountry
                      </button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
