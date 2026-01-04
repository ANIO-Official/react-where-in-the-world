import { Link } from "react-router-dom"
import useFetch from "../custom-hooks/useFetch";

interface BorderCountryButtonProps {
    cca3: string
}

export default function BorderCountryButton({cca3}: BorderCountryButtonProps) {
    const { data, loading, error} = useFetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
    console.log("is Loading", loading, " is Error? ", error, " got Data? ", data);

    
    return (
        <>
            { loading? <p>Loading Border🌏</p> : 
                error? <p>Error Loading Border⛔</p> :
                data.length && 
            <Link to={`/country/${data[0].name.common}/${cca3}/detailed-view`}>
                <button className="detail-border-country col-4">{data[0].name.common}</button>
            </Link>}
        </>
    )
}