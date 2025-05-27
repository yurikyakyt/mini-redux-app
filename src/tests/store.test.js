import { createStore } from "@core";

const testReducer = (state = { count: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return { count: state.count + 1 };
    }
    return state;
};

describe('createStore', () => {
    test('возвращает начальное состояние', () => {
        const store = createStore(testReducer);
        expect(store.getState()).toEqual({ count: 0 });
    });

    test('обновляет состояние через dispatch', () => {
        const store = createStore(testReducer);
        store.dispatch({ type: 'INCREMENT' });
        expect(store.getState().count).toBe(1);
    });

    test('вызов подписчиков при dispatch', () => {
        const store = createStore(testReducer);
        const callback = jest.fn();
        store.subscribe(callback);
        store.dispatch({ type: 'INCREMENT' });
        expect(callback).toHaveBeenCalled();
    });
});
