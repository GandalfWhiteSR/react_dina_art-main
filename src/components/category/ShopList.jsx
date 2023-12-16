import { useState } from "react";
import "./shoplist.scss";
import CartItem from "./cart-item/CartItem";
import SHOP_LIST from "../../redux/datas/shop-list-data";

const ShopList = () => {
    const [shopList] = useState(SHOP_LIST);

    return (
        <>
            {shopList.map(cat => {
                // 👇 Using Object.entries to get an array of [categoryName, items] pairs
                // which we can then map over
                return Object.entries(cat).map(([category, items]) => {
                    return (
                        <div className="Section">
                            <h3>{category}</h3>
                            <div className="bg-line" />
                            <CartItem items={items} />
                        </div>
                    );
                });
            })}
        </>
    );
};

export default ShopList;