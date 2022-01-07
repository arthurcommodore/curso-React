import React from "react";

export const data = {
    num: 0,
    text: "Utilizando Context API"
};

const DataContext =  React.createContext(data);
export default DataContext