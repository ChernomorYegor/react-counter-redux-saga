import {connect} from 'react-redux';

import App from "../App";

const mapStateToProps = state => {
    return {
        counters: state.counter.counters,
        fetchCounterErrorMessage: state.counter.fetchCounterErrorMessage,
        setCounterErrorMessage: state.counter.setCounterErrorMessage,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        decrement: (id) => dispatch({
            type: 'COUNTER/DECREMENT',
            payload: id - 1,
        }),
        increment: (id) => dispatch({
            type: 'COUNTER/INCREMENT',
            payload: id - 1,
        }),
        fetchCounters: () => dispatch({
            type: 'COUNTER/FETCH',
        }),
        setCounter: (id) => dispatch({
            type: 'COUNTER/SET_COUNTERS',
            payload: id,
        }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);