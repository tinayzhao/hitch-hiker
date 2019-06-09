import React, { useReducer } from "react";

const initialState = {
 docusignActive: false,
 mapBounds: {
   topLat: 38.17597329044698,
   bottomLat: 37.39717483367601,
   rightlng: -123.14023708496097,
   leftLong: -121.6529629150391,
 },
};

const reducer = (state, action) => {
 switch (action.type) {
   case "UPDATE_DOCUSIGN":
     return {
       ...state,
       docusignActive: action.payload,
     };
   case "UPDATE_BOUNDS":
     const newBounds = action.payload;
     return {
       ...state,
       mapBounds: newBounds,
     };

   default:
     return state;
 }
};

const AppContext = React.createContext(initialState);

function AppContextProvider(props) {
 const [state, dispatch] = useReducer(reducer, initialState);
 return (
   <AppContext.Provider
     value={{
       state,
       dispatch,
     }}
   >
     {props.children}
   </AppContext.Provider>
 );
}

export { AppContext, AppContextProvider };
