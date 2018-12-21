// app/product/containers/ProductList.js
import {connect} from 'react-redux';

import ProductList from '../components/ProductList';

import * as actions from '../state/actions';

function mapStateToProps(state) {
    return {
        products: state.productList.products,
        loading: state.productList.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
         loadProducts: function() {
            let actionFunc = actions.loadProducts();
            console.log('dispatching func');
            dispatch(actionFunc);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
                    (ProductList);