import { combineReducers } from 'redux';
import products from './products';
import message from './message';
import cart from './cart';
const appReducers = combineReducers({
    products,
    cart,
    message
});
export default appReducers;