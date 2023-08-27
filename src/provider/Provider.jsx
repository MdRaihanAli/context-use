import React, {createContext, useState } from 'react'


export const CounterContext = createContext()
function Provider({ children }) {
    const [count, setCount]= useState(5)
    const value = {
        count,
        setCount
    }
    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider >
    )
}

export default Provider