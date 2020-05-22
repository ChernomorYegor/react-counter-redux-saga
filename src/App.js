import React, {useEffect} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

function App({counters, decrement, increment, fetchCounters, fetchCounterErrorMessage, setCounter, setCounterErrorMessage}) {
    useEffect(() => {
        fetchCounters();
    }, []);

    useEffect(() => {
        if (fetchCounterErrorMessage) {
            alert(fetchCounterErrorMessage);
        }
    }, [fetchCounterErrorMessage]);

    useEffect(() => {
        if (setCounterErrorMessage) {
            alert(setCounterErrorMessage);
        }
    }, [setCounterErrorMessage]);

    function _increment(id) {
        increment(id);
        setCounter(id);
    }

    function _decrement(id) {
        decrement(id);
        setCounter(id);
    }

    return (
        <div className="container">
            <h1 className="mt-2 mb-4 text-center">Counter (react+redux+saga)</h1>
            {
                counters.map(({id, counter}) => (
                    <div className="w-25 m-auto" key={id}>
                        <div className="h2 mt-4 text-center">{counter}</div>
                        <div className="d-flex justify-content-between">
                            <button type="button" className="btn btn-primary" disabled={(counter === 0) && "disabled"} onClick={_decrement.bind(null, id)}>Decrease</button>
                            <button type="button" value={id} className="btn btn-danger" onClick={_increment.bind(null, id)}>Increase</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

App.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.object).isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
    fetchCounters: PropTypes.func.isRequired,
    fetchCounterErrorMessage: PropTypes.string,
    setCounter: PropTypes.func.isRequired,
    setCounterErrorMessage: PropTypes.string,
};

export default App;