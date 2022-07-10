import { QueryProvider } from '../../context/ContextProviders';
import { useState } from "react";
import SearchBar from './subcomponents/SearchBar';

const SearchImage = () => {
    const [query, setQuery] = useState('');
    const value = { query, setQuery };

    return (
        <>
            <QueryProvider.Provider value={value}>
                <SearchBar label='Enter your input below'></SearchBar>
            </QueryProvider.Provider>
        </>
    );
};

export default SearchImage;