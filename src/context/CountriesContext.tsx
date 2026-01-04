import React, { createContext, useContext } from "react";
import type { countryCodeDataStructure, countryDataStructure } from "../types";

//Create the context, export for access in other modules
//undefined = not wrapping component that needs it
export const CountryContext = React.createContext<
  (countryCodeDataStructure & countryDataStructure) | undefined
>(undefined);


//Custom hook to ensure element is wrapped.
//Consumes the theme and throws error when not setup properly
export const useThemeContext = () => {
    const countryContext = useContext(CountryContext)
    
    if(!countryContext){
        throw new Error(
            'Missing CountryContext.Provider Wrapper.'
        )
    }
    return (
        //Return an object with country data property and Country Code (cca3) property for accessing via context
        //set defaults
        {
            countryData : {
            flags: { png: countryContext.flags.png, svg:  countryContext.flags.svg, alt:  countryContext.flags.alt },
            name: { common: countryContext.name.common, official: countryContext.name.official, nativeName: countryContext.name.nativeName },
            tld: countryContext.tld,
            currencies: countryContext.currencies,
            capital: countryContext.capital,
            region: countryContext.region,
            subregion: countryContext.subregion,
            languages: countryContext.languages,
            borders: countryContext.borders,
            population: countryContext.population,
            },
            countryCodeData: {
                name: { common: countryContext.name.common, official: countryContext.name.official, nativeName: countryContext.name.nativeName },
                cca3: countryContext.cca3
            }
        }
    )
}