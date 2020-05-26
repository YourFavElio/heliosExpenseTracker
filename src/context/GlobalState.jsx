import React, {createContext, useReducer} from "react";

// initial state

const initialState = {
    transactions: [
        {id: 1, text: "Fiori", amount: -20},
        {id: 2, text: "Stipendio", amount: 500},
        {id: 3, text: "Qualcosa", amount: -150}
    ]
}

// creazione context
export const GlobalContext = createContext(initialState); 

// provider 
export const GlobalProvider = function()