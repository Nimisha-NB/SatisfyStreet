import React from 'react';
import Menu from '../../components/Menu';

const HomePage = ({ menuItems }) => {
    return (
        <div>
            <h1><strong>Food Menu</strong></h1>
            <Menu menuItems={menuItems} />
        </div>
    );
}
export default HomePage;