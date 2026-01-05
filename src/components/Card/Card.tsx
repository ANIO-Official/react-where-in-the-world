//Card Previews for Countries

import { Link } from "react-router-dom";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import type { CardProps } from "../../types";

export default function Card({
  img,
  name,
  population,
  region,
  capital,
  cca3,
}: CardProps) {
  //consume the theme context
  const { theme } = useThemeContext();

  return (
    <Link to={`/country/${name}/${cca3}/detailed-view`}>
      <li
        className={`card-template card col ${
          theme === "light" ? "dark" : "light"
        }`}
        tabIndex={0}
        key={cca3} //UNIQUE KEY
        aria-label="View more country details?"
      >
        <img src={img} className="card-img-top" alt="national-flag" />
        <div className="card-body">
          <h2 className="card-title">
            {name}
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
