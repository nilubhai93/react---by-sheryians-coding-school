import React, { createContext } from 'react'

export const dataContext = createContext()

const UserContext = ({ children }) => {

    const username = "Nilu"

    return (
        <div>
            <dataContext.Provider value={username}>
                <h1> {children} </h1>
            </dataContext.Provider>
        </div>
    )
}

export default UserContext