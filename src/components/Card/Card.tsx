//Card Previews for Countries

import { Link } from "react-router-dom";

export default function Card() {
  return (
    <Link to={`/country/:name/:cca3/detailed-view`}>
      <li
        className="card-template card col"
        tabIndex={0}
        key={`cca3`}
        aria-label="View more country details?"
      >
        <img src="..." className="card-img-top" alt="national-flag" />
        <div className="card-body">
          <h2 className="card-title">Country Name</h2>
          <p className="card-text pb-4 pt-1">
            <b>Population:</b> 99,999,999
            <br />
            <b>Region:</b> Europe
            <br />
            <b>Capital:</b> Belin
            <br />
          </p>
        </div>
      </li>
    </Link>
  );
}
