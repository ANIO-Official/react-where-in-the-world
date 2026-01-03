
//Card Previews for Countries

export default function Card(){
    return(
        <li
              className="card-template card col"
              style={{ display: "none" }}
              tabIndex={0}
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
    )
}