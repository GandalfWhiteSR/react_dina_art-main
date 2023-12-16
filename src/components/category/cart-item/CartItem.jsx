import "./cart-item.scss";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/cart.action";

const CartItem = ({ items, addItem }) => {
    return (
        <div className="List-section">
            {/* 👇 items is still an array so we need to map over it too */}
            {items.map(item => (
                <div className="card" key={item.id}>
                    <div>
                        <img className="inverted" src={item.img} alt="" />
                        <div className="card-body">
                            <h4 className="card-text">{item.dimention}</h4>
                            <button type="button" name="button" onClick={() => addItem(item)} disabled={false}>{item.price} €</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

//add a state to disable button of item

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);