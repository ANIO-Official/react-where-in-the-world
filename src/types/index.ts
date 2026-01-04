import type { ReactNode } from "react"


export interface CardProps{
    img: string
    name: string
    population: number
    region: string
    capital: string
    cca3: string
}

export type Theme = 'light' | 'dark'

//Shape the context
export interface ThemeContextType{
    setTheme: (value: Theme) => void //call to set the theme
    theme: Theme
}

export interface ContextProviderProps {
    children: ReactNode
}

export interface countryDataStructure {
  flags: { png: string; svg: string; alt: string };
  name: { common: string; official: string; nativeName: object };
  tld: string;
  currencies: object;
  capital: [string];
  region: string;
  subregion: string;
  languages: object;
  borders: [string];
  population: number;
}

export interface countryCodeDataStructure {
  name: { common: string; official: string; nativeName: object };
  cca3: string;
}