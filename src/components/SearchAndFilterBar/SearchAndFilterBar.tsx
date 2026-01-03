export default function SearchAndFilterBar() {
  return (
    <search
      id="interaction-query-container"
      className="row row-cols-md d-flex flex-column flex-md-row justify-content-between mb-4"
    >
      <div
        id="country-search-bar-container"
        className="col-md-10 d-flex flex-column"
      >
        <input
          id="country-search-bar"
          className="shadow-sm"
          type="search"
          name="search"
          placeholder="Search for a country... Try 'Cambodia!'"
          minLength= {3}
          pattern="[a-z A-Z]+"
          spellCheck="true"
          aria-label="Search for a country by name."
        />
        <span id="search-error"></span>
      </div>
      <div id="region-select-container" className="col-md-2">
        <select
          id="region-select"
          className="shadow-sm"
          aria-label="Search for countries by region."
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </search>
  );
}
