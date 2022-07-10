import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";

import { QueryProvider } from "../../../context/ContextProviders";
import { Debounce } from "../../../utilites/Debounce";

import './SearchBar.scss';

const SearchBar = ({ label }: { label: string }) => {
    // Stores method to update the search query state via Contextprovider
    const { setQuery } = useContext(QueryProvider);

    /* 
    Stores DOM Reference of search element.
    
    This has been intentionally done to save renders. With controlled components, every time query is updated, render is done which can have performance impact. 
    With this new approach, we will useRef() at input element to get the current value from the DOM, and update the state only after a specific interval of no activity from user via debouncing).
    */
    const inputElement = useRef<HTMLInputElement>(null);

    /* Stores debounced method to update state. Ref is used to persist value across renders */
    const updateSearchAsync = useRef(() => { });

    // componentDidMount()
    useEffect(() => {
        // normal state updation method
        const updateState = () => {
            const value = inputElement.current?.value;
            if (value)
                setQuery(value);
        };

        // returns debounced method. 
        updateSearchAsync.current = Debounce(updateState, 1000);
    }, [setQuery]);

    const updateQuery = () => {
        if (updateSearchAsync.current) updateSearchAsync.current();
    }

    return (
        <div className='container-center-column w-100'>
            <label htmlFor='search'>{label}</label>
            <input ref={inputElement} className='w-80' type='text' name='search' onChange={() => updateQuery()} autoComplete='off' autoFocus></input>
        </div>
    );
}



export default SearchBar;