import { Children, createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({children}) =>{    
    const [selectedCategory, setSelectedCategory] = useState(null);

    return(
        <Context.Provider value={{selectedCategory, setSelectedCategory}}>
                {children}
        </Context.Provider>
    )
};

// custom Hooks
export const useContextApi = () =>{
    const contextApi = useContext(Context);
    if(!contextApi){
        throw new Error("useUtils must be used within a UtilsContextProvider");
    }
    return contextApi;
}