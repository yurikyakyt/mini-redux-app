export function createStore(reducer, initialState) {
    let state = initialState;
    const subscribers = [];

    return {
        getState() {
            return state;
        },

        dispatch(action) {
            state = reducer(state, action);
            subscribers.forEach(sub => sub());
        },

        subscribe(callback) {
            subscribers.push(callback);
            return () => {
                const index = subscribers.indexOf(callback);
                if (index !== -1) subscribers.splice(index, 1);
            };
        }
    };
}