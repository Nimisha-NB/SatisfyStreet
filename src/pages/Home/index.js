import React, { useState } from 'react';
import Menu from '../../components/Menu';
import menuItems from '../../logic/data';
import SelectedItemContext from './selectedItemContext';

const HomePage = () => {

    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <SelectedItemContext.Provider value={{ selectedItems, setSelectedItems }}>
            <div>
                <h1><strong>Food Menu</strong></h1>
                <Menu menuItems={menuItems} />
            </div>
        </SelectedItemContext.Provider>
    );
}
export default HomePage;