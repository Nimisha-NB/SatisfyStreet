import React, { useContext } from 'react';
import { SelectedItemContext } from '../Home/selectedItemContext';
import { MenuItem } from '../../components/Menu';

const CartPage = ({ menuItems }) => {
    const { selectedItems, setSelectedItems } = useContext(SelectedItemContext);

    return (
        <div>
            <h1><strong>My Cart</strong></h1>
            {selectedItems.map((e) => <MenuItem item={e} />)}
        </div>
    );
}
export default CartPage;