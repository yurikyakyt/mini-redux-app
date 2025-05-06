export function combineReducers(reducers) {
    return (state = {}, action) => {
        const newState = {};
        let hasChanged = false;

        Object.keys(reducers).forEach(key => {
            const reducer = reducers[key];
            const previousState = state[key];
            const nextState = reducer(previousState, action);

            newState[key] = nextState;
            hasChanged = hasChanged || nextState !== previousState;
        });

        return hasChanged ? newState : state;
    };
}