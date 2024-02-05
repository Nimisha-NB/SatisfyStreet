import React, { useContext, useEffect, useState } from 'react';
import { SelectedItemContext } from '../Home/selectedItemContext';
import { MenuItem } from '../../components/Menu';
import '../../styles/App.css';
import { stylize } from '../../utils/stylize';

const CartPage = () => {
    const { selectedItems, setSelectedItems } = useContext(SelectedItemContext);
    const [cost, setCost] = useState(0);

    stylize(`
        .sidescroll {
            display: flex;
            overflow-x: auto;
            background-color: #161616;
        }
        .menu-item {
            flex: 0 0 auto;
            width: 250px;
            display: inline-block;
        }
        .cost{
            font-size: 100px;
            color: orange;
            margin-left: 20px;
            line-height: 1px;
        }
        p{
            color: grey;
        }
        button{
            background-color: #e91e63;
            border: 0px;
            color: white;
            border-radius: 25px;
            padding: 15px 100px;
        }
        button:hover{
            background-color: green;
        }
    `);

    useEffect(() => {
        const base_c = selectedItems.reduce((acc, v) => acc + v.price, 0);
        const fp = (base_c * 0.18) + base_c;
        setCost(fp.toFixed(2));
    }, [selectedItems]);

    const clickHandler = (e) => {
        alert('Order Successfully Placed!');
        setSelectedItems([]);
    }

    return (
        <div >
            <h1><strong>My Cart</strong></h1>
            <div className="sidescroll">
                {selectedItems.map((e) => <MenuItem item={e} key={e.name} />)}
            </div>
            <br /><br />
            <div>
                <p>Total Cost Applicable (with 18% GST)</p>
                <h1 className='cost'>₹{cost}</h1>
            </div>
            <button onClick={clickHandler}>Complete Order</button>
        </div>
    );
}
export default CartPage;