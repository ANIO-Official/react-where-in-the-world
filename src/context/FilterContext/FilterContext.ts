import React, { useContext } from "react";
import type { FilterContextType } from "../../types/index";

//Create the context, export for access in other modules
//undefined = not wrapping component that needs it
export const FilterContext = React.createContext<FilterContextType | undefined>(undefined)

//Consumes the context and throws error when not setup properly
export const useFilterContext = () => {
    const filterContext = useContext(FilterContext)
    
    if(!filterContext){
        throw new Error(
            'Missing FilterContext.Provider Wrapper.'
        )
    }
    return {
        setFilter: filterContext.setFilter,
        currentFilter: filterContext.currentFilter
    }
}