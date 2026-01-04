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

