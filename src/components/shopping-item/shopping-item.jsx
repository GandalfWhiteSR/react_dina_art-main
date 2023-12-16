import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart.action";
import "./shopping-item.scss";

const ShoppingItem = ({ item, removeItem }) => {
    const { img, dimention, price } = item;
    return (
        <div className="List-section">
            <div className="cart-list">
                {/* <p className="numeral">1.</p> */}
                <img className="inverted" src={img} alt="item" />
                <p>{dimention}</p>
                <p>{price} €</p>
                <ion-icon name="close-circle-outline" onClick={() => removeItem(item)} />
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(ShoppingItem);