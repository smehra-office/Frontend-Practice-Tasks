import React from "react";

export const QueryProvider = React.createContext({
    query: '',
    setQuery: (query: string) => { },
});

export { };