import React, { createContext, useState, useEffect } from 'react';

const SelectedItemContext = createContext();

const SelectedItemContextProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    // Load data from storage when component mounts
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('contextData'));
        if (storedData.length != 0) {
            console.log('InitialLoad');
            setSelectedItems(storedData);
        }
    }, []);

    // Save data to storage when it changes
    useEffect(() => {
        console.log('UEFFCT');
        console.log(JSON.stringify(selectedItems));
        localStorage.setItem('contextData', JSON.stringify(selectedItems));
        console.log('SAVVEEE');
    }, [selectedItems]);

    return (
        <SelectedItemContext.Provider value={{ selectedItems, setSelectedItems }}>
            {children}
        </SelectedItemContext.Provider>
    );
};


export { SelectedItemContext, SelectedItemContextProvider };