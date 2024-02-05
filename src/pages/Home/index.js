import React from 'react';
import Menu from '../../components/Menu';
import menuItems from '../../logic/data';

const HomePage = () => {
    return (
        <div>
            <h1><strong>Food Menu</strong></h1>
            <Menu menuItems={menuItems} />
        </div>
    );
}
export default HomePage;