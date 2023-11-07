import { Children } from 'react'
import { createContext } from 'react'

const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ Children }) => {
    return (
        <ShoppingCartContext.Provider>
            {Children}
        </ShoppingCartContext.Provider>
    )
} 

export {ShoppingCartProvider};