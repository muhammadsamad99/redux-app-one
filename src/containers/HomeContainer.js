import { connect } from 'react-redux';
import Home from '../components/Home.js';
import {addToCart} from '../services/actions/action'
// import {} from '../services/reducers/index'

// export default Home;
const mapDispatchToProps = dispatch => ({
    addToCartHandler: data=>dispatch(addToCart(data))
})

const mapStateToProps = state => ({
    cartData: state.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
