


export default function DetailedCountryPage() {
  return (
    <>
      <section id="country-details-container" className="row" hidden>
        <div id="back-button-container" className="col-12">
          <button id="back-button">⇽ Back</button>
        </div>
        <div id="detail-image-container" className="col-md-6">
          <img src="..." id="flag-img" alt="" />
        </div>
        <div id="detail-information-container" className="col-md-6 row-cols-md">
          <div id="detail-country-name-container" className="row">
            <p id="detail-country-name">Belgium</p>
          </div>
          <div id="detail-panels-container" className="row">
            <div id="detail-panel-left" className="col-md-6">
              <h2 id="information-left">
                {/* -Template Literal */}
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
                {/* -Template Literal */}
                <b>Top Level Domain:</b> .be
                <br />
                <br />
                <b>Currencies:</b> Euro
                <br />
                <br />
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
                    Template Literal of p tags per country
                    For of / Map / Other method
                    create a paragraph element for it.
                    Styled in css
                    */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
