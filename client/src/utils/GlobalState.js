// Define a global state object context store
import React, { createContext, useContext } from "react";

const StoreContext = createContext();

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { useStoreContext };