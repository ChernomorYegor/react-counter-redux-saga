import update from 'immutability-helper';

const initialState = {
    counters: [],
    fetchCounterErrorMessage: '',
    savedCounter: {},
    setCounterErrorMessage: '',
};

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'COUNTER/FETCH_SUCCESSFULLY':
            return update(state, {
                $merge: {
                    counters: action.payload.items,
                }
            });
        case 'COUNTER/FETCH_ERROR':
            return update(state, {
                $merge: {
                    fetchArticleErrorMessage: action.payload.message,
                }
            });

        case 'COUNTER/DECREMENT':
            const fromStateDecr = state.counters.slice();
            if (fromStateDecr[action.payload].counter <= 1) {
                fromStateDecr[action.payload].counter = 0;
            } else {
                fromStateDecr[action.payload].counter = state.counters[action.payload].counter - 1;
            }

            return update(state, {
                $merge: {
                    counters: fromStateDecr,
                }
            });
        case 'COUNTER/INCREMENT':
            const fromStateIncr = state.counters.slice();
            fromStateIncr[action.payload].counter = state.counters[action.payload].counter + 1;

            return update(state, {
                $merge: {
                    counters: fromStateIncr,
                }
            });
        case 'COUNTER/SET_COUNTER_SUCCESSFULLY':
            return update(state, {
                $merge: {
                    savedCounter: action.payload.counter,
                }
            });
        case 'COUNTER/SET_COUNTER_ERROR':
            return update(state, {
                $merge: {
                    setItemErrorMessage: action.payload.message,
                }
            });
        default:
            return state
    }
}

export default counterReducer;