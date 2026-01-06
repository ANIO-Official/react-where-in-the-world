import { useEffect, useState } from "react";
import { useFilterContext } from "../../context/FilterContext/FilterContext";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";

export default function SearchAndFilterBar() {
  //consume the theme context
  const { theme } = useThemeContext();

  //State and state change on new Query Typed in Searchbar
  const [query, setQuery] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setQuery(newValue);
  };

  //Set new fitler upon enter of search bar, click of search button, or change of select element
  const { setFilter } = useFilterContext();
  const handleFilterChangeOnSearch = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setFilter(query);
    }
  };
  const handleFilterOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setFilter(query);
  };
  const handleFilterChangeOnSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newValue = event.target.value;
    setFilter(newValue);
  };

  //show all when blank and unfocused
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (query === "") {
      setFilter(query);
    }
  };

  const [searchError, setSearchError] = useState<string | undefined>('')
  const searchBar : HTMLInputElement | null = document.querySelector('#country-search-bar')

  //Update Error Text
  useEffect(() => {
    
     switch (true) {
    case searchBar?.validity.patternMismatch:
      searchBar?.setCustomValidity(
        "Ensure the country name uses only letters a-z."
      );
      break;
    case searchBar?.validity.tooShort:
      searchBar?.setCustomValidity(
        "3 characters minimum. It makes your search must easier. (o゜▽゜)o☆"
      );
      break;
    default:
      searchBar?.setCustomValidity("");
    }
    setSearchError(searchBar?.validationMessage)
  }, [query])



  return (
    <search
      id="interaction-query-container"
      className="row row-cols-md d-flex flex-column flex-md-row justify-content-between mb-4"
    >
      <div
        id="country-search-bar-container"
        className="col-md-10 d-flex flex-column"
      >
        <div className="text-start">
          <input
            onChange={handleChange}
            onKeyUp={handleFilterChangeOnSearch}
            onBlur={handleBlur}
            id="country-search-bar"
            className={`shadow-sm ${theme === "light" ? "dark" : "light"}`}
            type="search"
            name="search"
            placeholder="Search for a country... Try 'Cambodia!'"
            minLength={3}
            pattern="[a-z A-Z]+"
            spellCheck="true"
            aria-label="Search for a country by name."
          />
          <button
            onClick={handleFilterOnClick}
            id="country-search-bar-button"
            className={`ms-2 ${theme === "light" ? "dark" : "light"}`}
          >
            Search by Name
          </button>
        </div>
        <span id="search-error">{searchError}</span>
      </div>
      <div id="region-select-container" className={"col-md-2"}>
        <select
          onChange={handleFilterChangeOnSelect}
          id="region-select"
          className={`shadow-sm ${theme === "light" ? "dark" : "light"}`}
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
