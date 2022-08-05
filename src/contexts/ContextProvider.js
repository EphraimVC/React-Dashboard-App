import { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => { 

    const { activeMenu, setActiveMenu } = useState(true);
    return (
        <StateContext.provider
            value={{ activeMenu, setActiveMenu }}>
            { children}
        </StateContext.provider>
    )
}

export const useStateContext = () => useContext(StateContext);