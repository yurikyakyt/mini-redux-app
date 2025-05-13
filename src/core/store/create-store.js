export function createStore(reducer, initialState) {
    let state = initialState;
    const subscribers = [];

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        subscribers.forEach((listener) => listener());
    };

    const subscribe = (callback) => {
        subscribers.push(callback);
        return () => {
            const index = subscribers.indexOf(callback);
            if (index !== -1) subscribers.splice(index, 1);
        };
    };

    dispatch({ type: "__INIT__" });

    return { getState, dispatch, subscribe };
}
