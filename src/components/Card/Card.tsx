//Card Previews for Countries

import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext";
import type { CardProps, countryCodeDataStructure } from "../../types";
import useFetch from "../../custom-hooks/useFetch";

export default function Card({
  img,
  name,
  population,
  region,
  capital,
  index,
}: CardProps) {
  //consume the theme context
  const { theme } = useThemeContext();
  return (
    <Link to={`/country/${name}}/detailed-view`}>
      <li
        className={`card-template card col ${
          theme === "light" ? "dark" : "light"
        }`}
        tabIndex={0}
        key={`${name.split(' ')[0]}${index}`} //UNIQUE KEY
        aria-label="View more country details?"
      >
        <img src={img} className="card-img-top" alt="national-flag" />
        <div className="card-body">
          <h2 className="card-title">
            {name[0].toUpperCase() + name.slice(1)}
          </h2>
          <p className="card-text pb-4 pt-1">
            <b>Population:</b> {population}
            <br />
            <b>Region:</b> {region}
            <br />
            <b>Capital:</b> {capital}
            <br />
          </p>
        </div>
      </li>
    </Link>
  );
}
