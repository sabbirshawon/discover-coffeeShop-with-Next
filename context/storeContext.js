import React, { createContext, useReducer } from "react";

// Define action types as an object to avoid potential typos
export const ACTION_TYPES = {
  SET_LAT_LONG: "SET_LAT_LONG",
  SET_COFFEE_STORES: "SET_COFFEE_STORES",
};

// Create the initial state as a constant
const initialState = {
  latLong: "",
  coffeeStores: [],
};

// Create a separate reducer function for clarity
const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LAT_LONG:
      return { ...state, latLong: action.payload.latLong };
    case ACTION_TYPES.SET_COFFEE_STORES:
      return { ...state, coffeeStores: action.payload.coffeeStores };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Create the context
export const StoreContext = createContext();

// Create the provider component
const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;