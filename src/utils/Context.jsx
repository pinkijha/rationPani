import { Children, createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItem, setCartItem] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});

  return (
    <Context.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedItems,
        setSelectedItems,
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// custom Hooks
export const useContextApi = () => {
  const contextApi = useContext(Context);
  if (!contextApi) {
    throw new Error("useUtils must be used within a UtilsContextProvider");
  }
  return contextApi;
};
