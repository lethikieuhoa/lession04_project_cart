import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import * as message from './../constants/Message';
import CartResult from './../components/CartResult';
import { actChangeMessage, actDeleteProductInCart, actUpdateProductInCart } from './../actions/index'
class CartContainer extends Component {

    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmout(cart)}
            </Cart>
        );
    }
    showCartItem = cart => {
        var result = <tr><td>{message.MSG_CART_EMPTY_SUCCESS}</td></tr>; //console.log(cart);  
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return <CartItem key={index}
                    item={item} index={index}
                    onDeleteProductInCart={this.props.onDeleteProductInCart}
                    onChangeMessage={this.props.onChangeMessage}
                    onUpdateProductInCart = {this.props.onUpdateProductInCart}
                />
            });

        }
        return result;
    }
    showTotalAmout = cart => {
        var result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />;
        }
        return result;
    }

}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actDeleteProductInCart(product))
        },
        onChangeMessage: (message) => {//console.log(message)
            dispatch(actChangeMessage(message))
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
